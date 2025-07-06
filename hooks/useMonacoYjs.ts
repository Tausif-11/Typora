import { useEffect, useRef } from 'react'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { MonacoBinding } from '@/lib/y-monaco'
import type { editor } from 'monaco-editor'

interface UseMonacoYjsOptions {
  editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | null>
  sessionId: string
  user?: { id: string; name: string; color?: string }
  onStatusChange?: (status: 'connected' | 'disconnected') => void
}

export function useMonacoYjs({
  editorRef,
  sessionId,
  user,
  onStatusChange,
}: UseMonacoYjsOptions) {
  const providerRef = useRef<WebsocketProvider | null>(null)
  const ydocRef = useRef<Y.Doc | null>(null)
  const ytextRef = useRef<Y.Text | null>(null)

  useEffect(() => {
    if (!editorRef.current || !sessionId) return

    // 1. Create a Yjs document and text type
    const ydoc = new Y.Doc()
    const ytext = ydoc.getText('monaco')
    ydocRef.current = ydoc
    ytextRef.current = ytext

    // 2. Connect to the Yjs WebSocket server
    const provider = new WebsocketProvider(
      process.env.NEXT_PUBLIC_YJS_WS_URL || 'ws://localhost:1234',
      sessionId,
      ydoc
    )
    providerRef.current = provider

    // 3. Bind Monaco Editor to Yjs
    let monacoBinding: MonacoBinding | null = null
    const model = editorRef.current.getModel()
    if (model) {
      monacoBinding = new MonacoBinding(
        ytext,
        model,
        new Set([editorRef.current]),
        provider.awareness
      )
    }

    // 4. Set user awareness
    if (user) {
      provider.awareness.setLocalStateField('user', {
        id: user.id,
        name: user.name,
        color: user.color || '#3B82F6',
      })
    }

    // 5. Connection status
    provider.on('status', (event: { status: 'connected' | 'disconnected' }) => {
      if (onStatusChange) {
        onStatusChange(event.status)
      }
    })

    return () => {
      provider.destroy()
      ydoc.destroy()
      if (monacoBinding) monacoBinding.destroy()
    }
  }, [editorRef, sessionId, user, onStatusChange])
}
