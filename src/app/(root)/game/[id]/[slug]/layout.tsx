import React from 'react'
import MainWrapper from '@/components/wrapper/MainWrapper'
import GameDetailTabs from '@/components/GameDetailTabs';
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

const GameDetailLayout = ({params, children}:{params:any, children:React.ReactNode}) => {
  const { id, slug } = params;

  return (
    <>
      <GameDetailTabs id={id} slug={slug} />
      <MainWrapper>
        {children}
      </MainWrapper>
    </>
  )
}

export default GameDetailLayout