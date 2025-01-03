'use server'

import { redirect } from 'next/navigation'
import { serverAuthService } from '@/services/auth.server'
import { authService } from '@/services/auth.service'

export async function login(formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const response = await serverAuthService.signIn(data)

  if (!response.success) {
    console.log("error", response.error)
    redirect('/login')
  }

  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const response = await serverAuthService.signUp(data)

  if (!response.success) {
    console.log("error", response.error)
    redirect('/register')
  }

  redirect('/login')
}

export async function logout() {
  const response = await authService.signOut()
  
  if (!response.success) {
    console.log("error", response.error)
  }
  
  redirect('/login')
}