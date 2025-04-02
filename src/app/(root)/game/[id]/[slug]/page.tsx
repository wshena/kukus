import React from 'react';
import GameDetail from './GameDetail';
import { getGameDetail } from '@/utils/actions/fetcher.action';

export async function generateMetadata({ params }: { params: any }) {
  const { id } = params;
  // Lakukan fetch data game detail untuk mendapatkan informasi seperti nama game
  const gameDetail = await getGameDetail(id);
  const gameName = gameDetail?.res?.name || 'Game Detail';
  
  return {
    title: `${gameName} - Kukus`,
    description: gameDetail?.res?.description || 'Detail game di Kukus',
  };
}

const page = async ({ params }: { params: any }) => {
  const { id } = params;
  const gameDetail = await getGameDetail(id);
  
  return (
    <GameDetail id={id} initialData={gameDetail ? gameDetail.res : null} />
  );
}

export default page;
