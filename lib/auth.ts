import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  avatar?: string
  createdAt: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData extends LoginCredentials {
  firstName: string
  lastName: string
}

export async function registerUser(data: RegisterData): Promise<{ user: User; error: null } | { user: null; error: string }> {
  try {
    // Sign up user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
      },
    })

    if (authError) {
      return { user: null, error: authError.message }
    }

    if (!authData.user) {
      return { user: null, error: "User creation failed" }
    }

    const user: User = {
      id: authData.user.id,
      email: authData.user.email || "",
      firstName: data.firstName,
      lastName: data.lastName,
      createdAt: authData.user.created_at,
    }

    return { user, error: null }
  } catch (error) {
    return { user: null, error: error instanceof Error ? error.message : "Registration failed" }
  }
}

export async function loginUser(credentials: LoginCredentials): Promise<{ user: User | null; error: string | null }> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    })

    if (error) {
      return { user: null, error: error.message }
    }

    if (!data.user) {
      return { user: null, error: "Login failed" }
    }

    const user: User = {
      id: data.user.id,
      email: data.user.email || "",
      firstName: data.user.user_metadata?.firstName || "",
      lastName: data.user.user_metadata?.lastName || "",
      phone: data.user.user_metadata?.phone || "",
      createdAt: data.user.created_at,
    }

    return { user, error: null }
  } catch (error) {
    return { user: null, error: error instanceof Error ? error.message : "Login failed" }
  }
}

export async function logoutUser(): Promise<{ error: string | null }> {
  try {
    const { error } = await supabase.auth.signOut()
    return { error: error ? error.message : null }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Logout failed" }
  }
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const { data } = await supabase.auth.getUser()
    
    if (!data.user) {
      return null
    }

    return {
      id: data.user.id,
      email: data.user.email || "",
      firstName: data.user.user_metadata?.firstName || "",
      lastName: data.user.user_metadata?.lastName || "",
      phone: data.user.user_metadata?.phone || "",
      avatar: data.user.user_metadata?.avatar || "",
      createdAt: data.user.created_at,
    }
  } catch (error) {
    return null
  }
}

export async function updateUserProfile(userId: string, updates: Partial<User>): Promise<{ success: boolean; error: string | null }> {
  try {
    const { error } = await supabase.auth.updateUser({
      data: updates,
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, error: null }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Update failed" }
  }
}
