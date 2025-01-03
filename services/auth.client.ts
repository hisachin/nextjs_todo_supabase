'use client'

import { createClient } from '@/utils/supabase/client'
import { AuthResponse } from '@/types/auth'

export class ClientAuthService {
  private static instance: ClientAuthService
  private supabase = createClient()
  
  private constructor() {}

  public static getInstance(): ClientAuthService {
    if (!ClientAuthService.instance) {
      ClientAuthService.instance = new ClientAuthService()
    }
    return ClientAuthService.instance
  }

  async signOut(): Promise<AuthResponse> {
    try {
      const { error } = await this.supabase.auth.signOut()
      
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

  async getUser() {
    try {
      const { data: { user }, error } = await this.supabase.auth.getUser()
      return {
        user,
        error: error?.message
      }
    } catch (error) {
      return {
        user: null,
        error: 'Failed to get user'
      }
    }
  }
}

export const clientAuthService = ClientAuthService.getInstance() 