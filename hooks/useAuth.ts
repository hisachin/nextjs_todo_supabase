'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { clientAuthService } from '@/services/auth.client'
import { AuthState } from '@/types/auth'

export const useAuth = () => {
  const router = useRouter()
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: true
  })

  useEffect(() => {
    const checkUser = async () => {
      const { user, error } = await clientAuthService.getUser()
      setAuthState({
        isAuthenticated: !!user,
        user,
        loading: false
      })
    }
    checkUser()
  }, [])

  const handleSignOut = async () => {
    const response = await clientAuthService.signOut()
    if (response.success) {
      setAuthState({
        isAuthenticated: false,
        user: null,
        loading: false
      })
      router.push('/login')
    }
    return response
  }

  return {
    ...authState,
    signOut: handleSignOut
  }
} 