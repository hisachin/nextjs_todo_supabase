"use client";

import { useAuth } from '@/hooks/useAuth'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ListTodo, CheckCircle2, AlertCircle } from "lucide-react"

export default function Dashboard() {
  const { user } = useAuth()

  const stats = [
    {
      title: "Total Tasks",
      value: "12",
      icon: ListTodo,
      description: "All tasks",
    },
    {
      title: "Completed",
      value: "8",
      icon: CheckCircle2,
      description: "Tasks completed",
    },
    {
      title: "Pending",
      value: "4",
      icon: AlertCircle,
      description: "Tasks pending",
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Welcome back, {user?.email}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Here's an overview of your tasks
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
