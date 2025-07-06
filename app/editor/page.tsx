'use client'

import { useState, useEffect } from 'react'
import { Editor } from '@/components/editor'
import { Sidebar } from '@/components/sidebar'
import { TopBar } from '@/components/top-bar'
import { CollaborationProvider } from '@/components/collaboration-provider'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Navigation } from '@/components/navigation'

export default function EditorPage() {
  const [sessionId, setSessionId] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Generate a new session ID if none exists
    if (!sessionId) {
      const newSessionId = Math.random().toString(36).substring(2, 15)
      setSessionId(newSessionId)
    }
    setIsLoading(false)
  }, [sessionId])

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <CollaborationProvider sessionId={sessionId}>
      <div className="h-screen flex flex-col bg-background">
        <Navigation />
        <TopBar sessionId={sessionId} />
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <main className="flex-1 relative">
            <Editor sessionId={sessionId} />
          </main>
        </div>
      </div>
    </CollaborationProvider>
  )
}
