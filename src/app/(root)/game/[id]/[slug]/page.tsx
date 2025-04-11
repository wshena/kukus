import React from 'react';
import GameDetail from './GameDetail';
import { getGameDetail } from '@/utils/actions/fetcher.action';
import { checkGameInWishlist, getUserWishlist } from '@/utils/actions/db.action';
import { getCurrentUser } from '@/utils/actions/auth.action';

const page = async ({ params }: { params: any }) => {
  const { id } = params;
  const gameDetail = await getGameDetail(id);
  const user = await getCurrentUser();
  const userWishlist = await getUserWishlist(user?.data?.id ? user?.data?.id : '');
  const isInWishlist = await checkGameInWishlist(id, userWishlist?.data?.id);

  console.log(isInWishlist)
  
  return (
    <GameDetail id={id} initialData={gameDetail ? gameDetail.res : null} alreadyInWishlist={isInWishlist?.exists} />
  );
}

export default page;
