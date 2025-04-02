import React from 'react'
import { getGameDetail, getGameScreenShots } from '@/utils/actions/fetcher.action';
import GameScreenshotDisplay from './GameScreenshot';

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

const page = async ({params}:{params:any}) => {
  const { id } = params;  
  const gameScreenshot = await getGameScreenShots(id);
  
  return (
    <GameScreenshotDisplay id={id} initialData={gameScreenshot} />
  )
}

export default page