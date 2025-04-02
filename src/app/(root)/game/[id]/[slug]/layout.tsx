import React from 'react'
import MainWrapper from '@/components/wrapper/MainWrapper'
import GameDetailTabs from '@/components/GameDetailTabs';

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