import { LayoutDashboard, ListTodo, Settings, Users, Calendar } from "lucide-react"
import { NavItem } from "@/types/navigation"

export const navigationItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Overview of your tasks and activities",
  },
  {
    title: "Todo List",
    href: "/todo",
    icon: ListTodo,
    description: "Manage your tasks and todos",
  }
] 