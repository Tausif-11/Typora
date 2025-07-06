'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Save,
  Share2,
  Settings,
  Users,
  Eye,
  EyeOff,
  ChevronRight,
  Home,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface TopBarProps {
  sessionId: string
  className?: string
}

export function TopBar({ sessionId, className }: TopBarProps) {
  const [isPublic, setIsPublic] = useState(false)
  const [isSaved, setIsSaved] = useState(true)

  const handleSave = () => {
    setIsSaved(true)
    // Here you would typically save the current state
    setTimeout(() => setIsSaved(false), 2000)
  }

  const handleShare = () => {
    const url = `${window.location.origin}/session/${sessionId}`
    navigator.clipboard.writeText(url)
    // You could show a toast notification here
  }

  const togglePublic = () => {
    setIsPublic(!isPublic)
  }

  return (
    <div
      className={cn(
        'h-12 bg-card border-b border-border flex items-center justify-between px-4',
        className
      )}
    >
      {/* Left side - Breadcrumbs */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          <Home className="w-4 h-4" />
        </Button>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium">Untitled Session</span>
        {!isSaved && (
          <Badge variant="secondary" className="text-xs">
            Unsaved
          </Badge>
        )}
      </div>

      {/* Center - Session info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">3 collaborators</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {sessionId.slice(0, 8)}...
          </Badge>
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePublic}
          className={cn('flex items-center gap-1', isPublic && 'text-primary')}
        >
          {isPublic ? (
            <Eye className="w-4 h-4" />
          ) : (
            <EyeOff className="w-4 h-4" />
          )}
          <span className="text-xs">{isPublic ? 'Public' : 'Private'}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleShare}
          className="flex items-center gap-1"
        >
          <Share2 className="w-4 h-4" />
          <span className="text-xs">Share</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleSave}
          className={cn('flex items-center gap-1', isSaved && 'text-green-500')}
        >
          <Save className="w-4 h-4" />
          <span className="text-xs">{isSaved ? 'Saved' : 'Save'}</span>
        </Button>

        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
