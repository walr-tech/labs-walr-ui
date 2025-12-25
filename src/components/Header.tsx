"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FlaskConical } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ThemeToggle } from "./ThemeToggle"

interface UserInfo {
  name: string | null
  email: string | null
  image: string | null
}

export interface HeaderProps {
  userName?: string
  userEmail?: string
  userImage?: string
  onSignOut?: () => void
  signOutUrl?: string  // URL-based sign-out for microfrontends
  shellUrl?: string    // Makes logo link back to shell
  disableAutoFetch?: boolean  // Opt-out for shell app that already has session data
}

function getInitials(name?: string, email?: string): string {
  if (name) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }
  if (email) {
    return email[0].toUpperCase()
  }
  return "U"
}

export function Header({ 
  userName, 
  userEmail, 
  userImage, 
  onSignOut,
  signOutUrl,
  shellUrl,
  disableAutoFetch = false
}: HeaderProps) {
  // Auto-detect shell URL
  const detectedShellUrl = shellUrl ?? 
    (typeof window !== 'undefined' 
      ? process.env.NEXT_PUBLIC_SHELL_URL || window.location.origin
      : process.env.NEXT_PUBLIC_SHELL_URL || '/')

  // Auto-construct sign-out URL
  const detectedSignOutUrl = signOutUrl ?? `${detectedShellUrl}/api/auth/signout`

  // State for auto-fetched user info
  const [fetchedUser, setFetchedUser] = useState<UserInfo | null>(null)
  const [isLoadingUser, setIsLoadingUser] = useState(false)

  // Auto-fetch user info if not provided and auto-fetch is enabled
  useEffect(() => {
    // Skip if user info is already provided or auto-fetch is disabled
    if (userName || disableAutoFetch) {
      return
    }

    // Skip on server-side
    if (typeof window === 'undefined') {
      return
    }

    setIsLoadingUser(true)
    const apiUrl = `${detectedShellUrl}/api/user`
    
    fetch(apiUrl, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch user info')
        }
        return res.json()
      })
      .then((data: UserInfo) => {
        setFetchedUser(data)
      })
      .catch((error) => {
        // Graceful fallback - just don't show user info
        console.warn('Failed to fetch user info:', error)
        setFetchedUser({ name: null, email: null, image: null })
      })
      .finally(() => {
        setIsLoadingUser(false)
      })
  }, [userName, disableAutoFetch, detectedShellUrl])

  // Use provided props or fall back to fetched user info
  const displayName = userName ?? fetchedUser?.name ?? undefined
  const displayEmail = userEmail ?? fetchedUser?.email ?? undefined
  const displayImage = userImage ?? fetchedUser?.image ?? undefined

  const initials = getInitials(displayName, displayEmail)

  const handleAvatarClick = () => {
    if (onSignOut) {
      onSignOut()
    } else if (detectedSignOutUrl) {
      window.location.href = detectedSignOutUrl
    }
  }

  const isClickable = !!(onSignOut || detectedSignOutUrl)

  const logoContent = (
    <div className="flex items-center gap-2">
      <FlaskConical className="h-5 w-5 text-primary" />
      <span className="text-lg font-semibold">
        Walr <span className="text-primary">Labs</span>
      </span>
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        {detectedShellUrl ? (
          <Link href={detectedShellUrl} className="hover:opacity-80 transition-opacity">
            {logoContent}
          </Link>
        ) : (
          logoContent
        )}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {displayName && (
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {displayName}
            </span>
          )}
          <Avatar 
            className={isClickable ? "cursor-pointer" : undefined} 
            onClick={isClickable ? handleAvatarClick : undefined}
          >
            {displayImage && <AvatarImage src={displayImage} alt={displayName || "User"} />}
            <AvatarFallback className="bg-muted text-muted-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}


