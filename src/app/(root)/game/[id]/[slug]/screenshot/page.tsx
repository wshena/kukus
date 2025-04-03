import React from 'react'
import { getGameDetail, getGameScreenShots } from '@/utils/actions/fetcher.action';
import GameScreenshotDisplay from './GameScreenshot';

const page = async ({params}:{params:any}) => {
  const { id } = params;  
  const gameScreenshot = await getGameScreenShots(id);
  
  return (
    <GameScreenshotDisplay id={id} initialData={gameScreenshot} />
  )
}

export default page