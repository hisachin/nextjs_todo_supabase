import { ThemeToggle } from "../theme-toggle";

export function PageHeader() {
  return (
    <div className="flex h-16 items-center justify-end border-b p-4">
      <ThemeToggle />
    </div>
  )
} 