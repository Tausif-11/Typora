'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Users, Wifi, WifiOff } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CollaborationIndicatorProps {
  className?: string
}

export function CollaborationIndicator({
  className,
}: CollaborationIndicatorProps) {
  const [isConnected, setIsConnected] = useState(true)

  useEffect(() => {
    // Simulate connection status
    const interval = setInterval(() => {
      setIsConnected(Math.random() > 0.1) // 90% chance of being connected
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn('absolute top-2 right-2 z-10', className)}>
      <Badge
        variant="secondary"
        className={cn(
          'flex items-center gap-1 px-2 py-1 text-xs',
          isConnected
            ? 'bg-green-500/10 text-green-500 border-green-500/20'
            : 'bg-red-500/10 text-red-500 border-red-500/20'
        )}
      >
        {isConnected ? (
          <Wifi className="w-3 h-3" />
        ) : (
          <WifiOff className="w-3 h-3" />
        )}
        <Users className="w-3 h-3" />
      </Badge>
    </div>
  )
}
