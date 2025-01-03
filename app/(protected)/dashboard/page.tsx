"use client";

import { useAuth } from '@/hooks/useAuth'

export default function Dashboard() {
  const { signOut, user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={signOut}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Welcome {user?.email}!
          </h2>
          <p>This is a protected route - only authenticated users can see this page.</p>
        </div>
      </div>
    </div>
  )
}
