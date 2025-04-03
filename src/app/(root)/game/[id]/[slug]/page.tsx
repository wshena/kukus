import React from 'react';
import GameDetail from './GameDetail';
import { getGameDetail } from '@/utils/actions/fetcher.action';

const page = async ({ params }: { params: any }) => {
  const { id } = params;
  const gameDetail = await getGameDetail(id);
  
  return (
    <GameDetail id={id} initialData={gameDetail ? gameDetail.res : null} />
  );
}

export default page;
