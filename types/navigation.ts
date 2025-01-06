import { LucideIcon } from "lucide-react"

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

export interface DashboardStats {
  title: string;
  value: string;
  icon: LucideIcon;
  description: string;
  color?: string;
} 