'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

interface CollaborationContextType {
  sessionId: string
  isConnected: boolean
  collaborators: Collaborator[]
  sendMessage: (message: unknown) => void
}

interface Collaborator {
  id: string
  name: string
  avatar?: string
  isOnline: boolean
  cursorPosition?: { x: number; y: number }
}

const CollaborationContext = createContext<
  CollaborationContextType | undefined
>(undefined)

interface CollaborationProviderProps {
  children: ReactNode
  sessionId: string
}

export function CollaborationProvider({
  children,
  sessionId,
}: CollaborationProviderProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [collaborators, setCollaborators] = useState<Collaborator[]>([])

  useEffect(() => {
    // Simulate WebSocket connection
    const connectTimeout = setTimeout(() => {
      setIsConnected(true)
      setCollaborators([
        {
          id: '1',
          name: 'John Doe',
          avatar: 'https://github.com/github.png',
          isOnline: true,
          cursorPosition: { x: 100, y: 50 },
        },
        {
          id: '2',
          name: 'Jane Smith',
          avatar: 'https://github.com/github.png',
          isOnline: true,
          cursorPosition: { x: 200, y: 80 },
        },
        {
          id: '3',
          name: 'Bob Johnson',
          avatar: 'https://github.com/github.png',
          isOnline: false,
          cursorPosition: { x: 150, y: 120 },
        },
      ])
    }, 1000)

    return () => clearTimeout(connectTimeout)
  }, [sessionId])

  const sendMessage = (message: unknown) => {
    // Here you would typically send the message via WebSocket
    console.log('Sending message:', message)
  }

  const value: CollaborationContextType = {
    sessionId,
    isConnected,
    collaborators,
    sendMessage,
  }

  return (
    <CollaborationContext.Provider value={value}>
      {children}
    </CollaborationContext.Provider>
  )
}

export function useCollaboration() {
  const context = useContext(CollaborationContext)
  if (context === undefined) {
    throw new Error(
      'useCollaboration must be used within a CollaborationProvider'
    )
  }
  return context
}
