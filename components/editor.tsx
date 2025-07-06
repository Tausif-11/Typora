'use client'

import { useState, useRef, MutableRefObject } from 'react'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { CollaborationIndicator } from './collaboration-indicator'
import { UserCursors } from './user-cursors'
import { cn } from '@/lib/utils'
import { useMonacoYjs } from '@/hooks/useMonacoYjs'

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => <div className="h-full bg-editor-bg animate-pulse" />,
})

interface EditorProps {
  sessionId: string
  className?: string
}

export function Editor({ sessionId, className }: EditorProps) {
  const { data: session } = useSession()
  const [language] = useState('javascript')
  const [theme] = useState('vs-dark')
  const editorRef: MutableRefObject<
    import('monaco-editor').editor.IStandaloneCodeEditor | null
  > = useRef(null)

  // Integrate Monaco with Yjs for real-time collaboration
  useMonacoYjs({
    editorRef,
    sessionId,
    user:
      session?.user && session.user.id
        ? { id: session.user.id, name: session.user.name || 'Anonymous' }
        : undefined,
    // onStatusChange can be handled if needed
  })

  const handleEditorDidMount = (
    editor: import('monaco-editor').editor.IStandaloneCodeEditor,
    monaco: typeof import('monaco-editor')
  ) => {
    editorRef.current = editor
    monaco.editor.setTheme('vs-dark')
  }

  return (
    <div className={cn('h-full relative', className)}>
      <CollaborationIndicator />
      <UserCursors />

      <MonacoEditor
        height="100%"
        language={language}
        theme={theme}
        onMount={handleEditorDidMount}
        options={{
          automaticLayout: true,
          fontSize: 14,
          fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          minimap: {
            enabled: true,
            side: 'right',
          },
          wordWrap: 'on',
          bracketPairColorization: {
            enabled: true,
          },
          guides: {
            bracketPairs: true,
            indentation: true,
          },
        }}
      />
    </div>
  )
}
