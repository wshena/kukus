import supabase from "@/lib/supabaseClient"
import { createClient } from "@/lib/supabseServer";

export const login = async (email:string, password:string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      return {
        success: false,
        message: error.message || 'Login failed, please try again.',
      }
    } else if (data) {
      console.log("Login success:", data)
      console.log("Cookies after login:", document.cookie)

      return {
        success: true,
        message: 'Login successfull.'
      }
    }
    
  } catch (error:any) {
    console.log(error);
    return {
      success: false,
      message: error.message || 'Login gagal, silakan coba lagi.',
    }
  }
};

export const signup = async (email:string, password:string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      return {
        success: false,
        message: error.message || 'Sign in failed, please try again.',
      }
    } else if (data) {
      console.log("Sign in success:", data)
      console.log("Cookies after Sign in:", document.cookie)

      return {
        success: true,
        message: 'Sign in successfull.'
      }
    }
    
  } catch (error:any) {
    console.log(error);
    return {
      success: false,
      message: error.message || 'Login gagal, silakan coba lagi.',
    }
  }
};

export const getCurrentUser = async () => {
  const supabase = await createClient()

  try {
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error || !user) {
      return {
        success: false,
        data: null,
        message: error?.message || 'User not found',
      }
    }

    return {
      success: true,
      data: user,
    }

  } catch (err: any) {
    console.error('getCurrentUser error:', err)
    return {
      success: false,
      data: null,
      message: err.message || 'Unknown error',
    }
  }
}

export async function isAuthenticated() {
  const user = await getCurrentUser();

  return !!user;
}