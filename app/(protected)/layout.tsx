"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { navigationItems } from "@/lib/constants"
import { Header } from "@/components/layout/header"
import { PageHeader } from "@/components/layout/pageHeader"
import { SidebarNav } from "@/components/layout/sidebar-nav"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { signOut } = useAuth()

  return (
    <div className="flex h-screen bg-background">
      <aside
        className={cn(
          "relative flex flex-col border-r bg-card",
          isCollapsed ? "w-16" : "w-64",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <Header 
          isCollapsed={isCollapsed} 
          onToggle={() => setIsCollapsed(!isCollapsed)} 
        />
        <SidebarNav items={navigationItems} isCollapsed={isCollapsed} />
        <div className="border-t p-2">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3",
              isCollapsed && "justify-center"
            )}
            onClick={() => signOut()}
          >
            <LogOut className="h-4 w-4" />
            {!isCollapsed && <span>Log out</span>}
          </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <PageHeader/>
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  )
} 