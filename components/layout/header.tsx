"use client"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function Header({ isCollapsed, onToggle }: HeaderProps) {
  return (
    <div className="flex h-16 items-center justify-between border-b p-4">
      <div className="flex items-center gap-2">
        {!isCollapsed && (
          <span className="font-medium">
            Todo App
          </span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
        >
          {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
} 