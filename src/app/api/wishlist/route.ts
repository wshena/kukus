import { getCurrentUser } from "@/utils/actions/auth.action";
import { addGameToGameList, getUserWishlist } from "@/utils/actions/db.action";

export async function POST(req: Request) {
  try {
    const game = await req.json();
    const user = await getCurrentUser();

    if (!user?.data?.id) {
      return Response.json({ success: false, message: 'User tidak ditemukan' }, { status: 401 });
    }

    const wishlist:any = await getUserWishlist(user.data.id);

    if (!wishlist?.data?.id) {
      return Response.json({ success: false, message: 'Wishlist tidak ditemukan' }, { status: 404 });
    }

    const result = await addGameToGameList(game, wishlist.data.id);
    return Response.json(result);
  } catch (error: any) {
    return Response.json({ success: false, message: error.message || 'Error menambahkan game' }, { status: 500 });
  }
}
