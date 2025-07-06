'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/editor', label: 'Editor' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav
      className={cn(
        'flex items-center justify-between w-full px-4 py-3 bg-card/50 backdrop-blur-sm border-b border-border',
        className
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/Typora_Main_Logo.png"
          alt="Typora Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Typora
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === item.href ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/auth/signin">Sign In</Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/editor">Start Coding</Link>
        </Button>
      </div>
    </nav>
  )
}
