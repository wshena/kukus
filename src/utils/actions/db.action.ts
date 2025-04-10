import supabase from "@/lib/supabaseClient";
import { getCurrentUser } from "./auth.action"

export const generateWishlist = async () => {
  try {
    const user = await getCurrentUser();
    if (user?.success === true && user?.data !== null) {
      // Cek apakah wishlist sudah ada untuk user ini
      const { data: existingWishlist, error: fetchError } = await supabase
        .from('wishlist')
        .select('*')
        .eq('user_id', user.data.id)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        return {
          success: false,
          message: fetchError.message
        };
      }
      
      if (existingWishlist) {
        return {
          success: true,
          message: 'Wishlist already exist.'
        };
      }

      const { error } = await supabase
        .from('wishlist')
        .insert({ id: user.data.id, user_id: user.data.id });
      
      if (error) {
        return {
          success: false,
          message: error.message || error
        };
      }
      
      return {
        success: true,
        message: 'Success creating user wishlist record.'
      };
    } else {
      return {
        success: false,
        message: 'User data not found.'
      };
    }
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: error.message || error
    };
  }
};

export const addGameToGameList = async (
  game: { id: string; title: string; game_cover_url: string; slug: string },
  wishlistId: string
) => {
  try {
    // Cek apakah game dengan id tersebut sudah ada di wishlist
    const { data: existingGame, error: fetchError } = await supabase
      .from('gameList')
      .select('*')
      .eq('id', game.id)
      .eq('wishlist_id', wishlistId)
      .maybeSingle(); // Mengembalikan satu record jika ada, atau null jika tidak ada

    if (fetchError) {
      return {
        success: false,
        message: fetchError.message || 'Terjadi kesalahan saat pengecekan data game.'
      };
    }

    if (existingGame) {
      return {
        success: true,
        message: 'Game sudah ada di wishlist.',
        data: existingGame
      };
    }

    // Jika game belum ada, lakukan insert
    const { data, error } = await supabase
      .from('gameList')
      .insert({
        id: game.id, // id game dari API
        wishlist_id: wishlistId,
        title: game.title,
        cover_image_url: game.game_cover_url,
        slug: game.slug        
      });

    if (error) {
      return {
        success: false,
        message: error.message || 'Terjadi kesalahan saat menambahkan game ke wishlist anda.'
      };
    }

    return {
      success: true,
      message: 'Game berhasil ditambahkan ke wishlist anda.',
      data
    };

  } catch (error: any) {
    console.error("Error addGameToGameList:", error);
    return {
      success: false,
      message: error.message || 'Terjadi kesalahan saat menambahkan game.'
    };
  }
};


export const getUserWishlist = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('wishlist')
      .select('*, gameList:gameList(*)')
      .eq('user_id', userId)
      .single();

    if (error) {
      return {
        success: false,
        message: error.message || 'Terjadi kesalahan saat mengambil data wishlist.'
      };
    }

    return {
      success: true,
      message: 'Wishlist berhasil diambil.',
      data
    };
  } catch (error: any) {
    console.error("Error getUserWishlist:", error);
    return {
      success: false,
      message: error.message || 'Terjadi kesalahan saat mengambil data wishlist.'
    };
  }
};