"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavItem } from "@/types/navigation"
import { buttonVariants } from "@/components/ui/button"

interface SidebarNavProps {
  items: NavItem[]
  isCollapsed: boolean
}

export function SidebarNav({ items, isCollapsed }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className="flex-1 space-y-1 p-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: pathname === item.href ? "secondary" : "ghost" }),
            "w-full justify-start",
            pathname === item.href && "bg-secondary"
          )}
        >
          <item.icon className="h-4 w-4" />
          {!isCollapsed && (
            <span className="ml-2">{item.title}</span>
          )}
        </Link>
      ))}
    </nav>
  )
} 