import { createClient } from '@/utils/supabase/server'
import { AuthUser, AuthResponse } from '@/types/auth'

export class AuthService {
  private static instance: AuthService
  
  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  async signIn(credentials: AuthUser): Promise<AuthResponse> {
    try {
      const supabase = await createClient()
      const { error } = await supabase.auth.signInWithPassword(credentials)
      
      return {
        success: !error,
        error: error?.message
      }
    } catch (error) {
      return {
        success: false,
        error: 'Authentication failed'
      }
    }
  }

  async signUp(credentials: AuthUser): Promise<AuthResponse> {
    try {
      const supabase = await createClient()
      const { error } = await supabase.auth.signUp(credentials)
      
      return {
        success: !error,
        error: error?.message
      }
    } catch (error) {
      return {
        success: false,
        error: 'Registration failed'
      }
    }
  }

  async signOut(): Promise<AuthResponse> {
    try {
      const supabase = await createClient()
      const { error } = await supabase.auth.signOut()
      
      return {
        success: !error,
        error: error?.message
      }
    } catch (error) {
      return {
        success: false,
        error: 'Sign out failed'
      }
    }
  }
}

export const authService = AuthService.getInstance() 