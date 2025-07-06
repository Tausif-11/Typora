'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  FileText,
  Folder,
  Plus,
  Settings,
  Share2,
  Github,
  Download,
  Upload,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface File {
  id: string
  name: string
  type: 'file' | 'folder'
  language?: string
  path: string
}

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [files] = useState<File[]>([
    {
      id: '1',
      name: 'main.js',
      type: 'file',
      language: 'javascript',
      path: '/main.js',
    },
    {
      id: '2',
      name: 'styles.css',
      type: 'file',
      language: 'css',
      path: '/styles.css',
    },
    {
      id: '3',
      name: 'index.html',
      type: 'file',
      language: 'html',
      path: '/index.html',
    },
    { id: '4', name: 'components', type: 'folder', path: '/components' },
    { id: '5', name: 'utils', type: 'folder', path: '/utils' },
  ])
  const [selectedFile, setSelectedFile] = useState<string>('1')
  const [collaborators] = useState([
    {
      id: '1',
      name: 'John Doe',
      avatar: 'https://github.com/github.png',
      online: true,
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatar: 'https://github.com/github.png',
      online: true,
    },
  ])

  const handleFileClick = (fileId: string) => {
    setSelectedFile(fileId)
  }

  const getLanguageColor = (language?: string) => {
    const colors: Record<string, string> = {
      javascript: 'bg-yellow-500',
      typescript: 'bg-blue-500',
      html: 'bg-orange-500',
      css: 'bg-blue-600',
      python: 'bg-green-500',
      java: 'bg-red-500',
      cpp: 'bg-blue-700',
      c: 'bg-gray-500',
      php: 'bg-purple-500',
      ruby: 'bg-red-600',
      go: 'bg-cyan-500',
      rust: 'bg-orange-600',
      swift: 'bg-orange-400',
      kotlin: 'bg-purple-600',
      scala: 'bg-red-700',
      json: 'bg-yellow-600',
      xml: 'bg-orange-700',
      yaml: 'bg-green-600',
      markdown: 'bg-blue-800',
      sql: 'bg-blue-900',
      shell: 'bg-green-700',
      dockerfile: 'bg-blue-500',
    }
    return colors[language || ''] || 'bg-gray-500'
  }

  return (
    <div
      className={cn(
        'w-64 bg-card border-r border-border h-full flex flex-col',
        className
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Files</h2>
          <Button size="sm" variant="ghost">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1">
            <Upload className="w-4 h-4 mr-1" />
            Import
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            <Download className="w-4 h-4 mr-1" />
            Export
          </Button>
        </div>
      </div>

      {/* File Explorer */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {files.map(file => (
            <div
              key={file.id}
              className={cn(
                'flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-accent transition-colors',
                selectedFile === file.id && 'bg-accent'
              )}
              onClick={() => handleFileClick(file.id)}
            >
              {file.type === 'folder' ? (
                <Folder className="w-4 h-4 text-blue-500" />
              ) : (
                <FileText className="w-4 h-4 text-green-500" />
              )}
              <span className="flex-1 text-sm truncate">{file.name}</span>
              {file.language && (
                <div
                  className={cn(
                    'w-2 h-2 rounded-full',
                    getLanguageColor(file.language)
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Collaborators */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium">Collaborators</h3>
          <Button size="sm" variant="ghost">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
        <div className="space-y-2">
          {collaborators.map(collaborator => (
            <div key={collaborator.id} className="flex items-center gap-2">
              <div className="relative">
                <Image
                  src={collaborator.avatar}
                  alt={collaborator.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full"
                />
                <div
                  className={cn(
                    'absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-background',
                    collaborator.online ? 'bg-green-500' : 'bg-gray-400'
                  )}
                />
              </div>
              <span className="text-sm truncate flex-1">
                {collaborator.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 border-t border-border">
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Github className="w-4 h-4 mr-2" />
            Connect GitHub
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  )
}
