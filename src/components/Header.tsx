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
  // #region agent log
  if (typeof window !== 'undefined') { fetch('http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:entry',message:'Header component props',data:{userName,userEmail,userImage,shellUrl,signOutUrl,disableAutoFetch,env_shell_url:process.env.NEXT_PUBLIC_SHELL_URL,window_origin:window.location.origin},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,C,E'})}).catch(()=>{}); }
  // #endregion
  
  // Auto-detect shell URL
  const detectedShellUrl = shellUrl ?? 
    (typeof window !== 'undefined' 
      ? process.env.NEXT_PUBLIC_SHELL_URL || window.location.origin
      : process.env.NEXT_PUBLIC_SHELL_URL || '/')

  // Auto-construct sign-out URL
  const detectedSignOutUrl = signOutUrl ?? `${detectedShellUrl}/api/auth/signout`

  // #region agent log
  if (typeof window !== 'undefined') { fetch('http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:urls_detected',message:'Detected URLs',data:{detectedShellUrl,detectedSignOutUrl},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{}); }
  // #endregion

  // State for auto-fetched user info
  const [fetchedUser, setFetchedUser] = useState<UserInfo | null>(null)
  const [isLoadingUser, setIsLoadingUser] = useState(false)

  // Auto-fetch user info if not provided and auto-fetch is enabled
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:useEffect_entry',message:'useEffect triggered',data:{userName,disableAutoFetch,typeof_window:typeof window},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C,E'})}).catch(()=>{});
    // #endregion
    
    // Skip if user info is already provided or auto-fetch is disabled
    if (userName || disableAutoFetch) {
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:useEffect_skipped',message:'Fetch skipped due to conditions',data:{userName,disableAutoFetch},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      return
    }

    // Skip on server-side
    if (typeof window === 'undefined') {
      return
    }

    setIsLoadingUser(true)
    const apiUrl = `${detectedShellUrl}/api/user`
    
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:fetch_start',message:'Starting fetch',data:{apiUrl},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,B,D'})}).catch(()=>{});
    // #endregion
    
    fetch(apiUrl, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:fetch_response',message:'Fetch response received',data:{ok:res.ok,status:res.status,statusText:res.statusText},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B,D'})}).catch(()=>{});
        // #endregion
        
        if (!res.ok) {
          throw new Error('Failed to fetch user info')
        }
        return res.json()
      })
      .then((data: UserInfo) => {
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:fetch_success',message:'User data received',data:{userData:data},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B,D'})}).catch(()=>{});
        // #endregion
        
        setFetchedUser(data)
      })
      .catch((error) => {
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:fetch_error',message:'Fetch error caught',data:{error:error.message,error_string:String(error)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
        // #endregion
        
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

  // #region agent log
  if (typeof window !== 'undefined') { fetch('http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:display_values',message:'Final display values',data:{displayName,displayEmail,displayImage,fetchedUser,isLoadingUser},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C,E'})}).catch(()=>{}); }
  // #endregion

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


