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
  const supabase = await createClient();

  try {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return {
        success: false,
        data: null,
        message: error?.message || 'User not found',
      };
    }

    // Konversi user menjadi plain object
    const plainUser = JSON.parse(JSON.stringify(user));

    return {
      success: true,
      data: plainUser,
    };

  } catch (err: any) {
    console.error('getCurrentUser error:', err);
    return {
      success: false,
      data: null,
      message: err.message || 'Unknown error',
    };
  }
};

export async function isAuthenticated() {
  const user = await getCurrentUser();

  return !!user;
};

export const logout = async () => {
  try {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout saat logout')), 10000)
    );

    const { error } = await Promise.race([
      supabase.auth.signOut(),
      timeoutPromise
    ]) as { error?: Error };

    if (error) {
      console.error('Terjadi error saat signOut Supabase:', error.message);
      throw error;
    }

  } catch (error: any) {
    console.error('Error pada fungsi performLogout:', error.message);
    throw error;
  }
}