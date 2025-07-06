'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface UserCursor {
  id: string
  name: string
  color: string
  x: number
  y: number
  isActive: boolean
}

interface UserCursorsProps {
  className?: string
}

export function UserCursors({ className }: UserCursorsProps) {
  const [cursors, setCursors] = useState<UserCursor[]>([
    {
      id: '1',
      name: 'John Doe',
      color: '#3B82F6',
      x: 100,
      y: 50,
      isActive: true,
    },
    {
      id: '2',
      name: 'Jane Smith',
      color: '#10B981',
      x: 200,
      y: 80,
      isActive: true,
    },
    {
      id: '3',
      name: 'Bob Johnson',
      color: '#F59E0B',
      x: 150,
      y: 120,
      isActive: false,
    },
  ])

  useEffect(() => {
    // Simulate cursor movement
    const interval = setInterval(() => {
      setCursors(prev =>
        prev.map(cursor => ({
          ...cursor,
          x: cursor.x + (Math.random() - 0.5) * 20,
          y: cursor.y + (Math.random() - 0.5) * 10,
          isActive: Math.random() > 0.3,
        }))
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn('absolute inset-0 pointer-events-none z-20', className)}>
      {cursors.map(cursor => (
        <div
          key={cursor.id}
          className={cn(
            'absolute transition-all duration-300 ease-out',
            !cursor.isActive && 'opacity-50'
          )}
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
          }}
        >
          {/* Cursor line */}
          <div
            className="w-0.5 h-5 animate-pulse-glow"
            style={{ backgroundColor: cursor.color }}
          />

          {/* User label */}
          <div
            className="absolute top-6 left-0 bg-card border border-border rounded-md px-2 py-1 text-xs whitespace-nowrap shadow-lg"
            style={{ borderLeftColor: cursor.color, borderLeftWidth: '3px' }}
          >
            <span className="font-medium">{cursor.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
