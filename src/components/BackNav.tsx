import { ArrowLeft } from "lucide-react"

export interface BackNavProps {
  href: string
  label?: string
  className?: string
}

/**
 * Back navigation bar for lab apps (local dev navigation).
 * In production with microfrontends, the shell provides the header.
 * In local dev, this provides a simple back link.
 */
export function BackNav({ href, label = "Back to Walr Labs", className = "" }: BackNavProps) {
  return (
    <div className={`border-b border-border bg-card/50 px-6 py-3 ${className}`}>
      <a 
        href={href}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {label}
      </a>
    </div>
  )
}

