"use client"

import { FlaskConical } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ThemeToggle } from "./ThemeToggle"

export interface HeaderProps {
  userName?: string
  userEmail?: string
  userImage?: string
  onSignOut?: () => void
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

export function Header({ userName, userEmail, userImage, onSignOut }: HeaderProps) {
  const initials = getInitials(userName, userEmail)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <FlaskConical className="h-5 w-5 text-primary" />
          <span className="text-lg font-semibold">
            Walr <span className="text-primary">Labs</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {userName && (
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {userName}
            </span>
          )}
          <Avatar 
            className={onSignOut ? "cursor-pointer" : undefined} 
            onClick={onSignOut}
          >
            {userImage && <AvatarImage src={userImage} alt={userName || "User"} />}
            <AvatarFallback className="bg-muted text-muted-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}


