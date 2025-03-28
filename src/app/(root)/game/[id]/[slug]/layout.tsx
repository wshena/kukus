import GameDetailTabs from '@/components/GameDetailTabs'
import MainWrapper from '@/components/MainWrapper'
import React from 'react'

const GameDetailLayout = ({params, children}:{params:any, children:React.ReactNode}) => {
  const { id, slug } = params;

  return (
    <MainWrapper>
      <GameDetailTabs id={id} slug={slug} />
      {children}
    </MainWrapper>
  )
}

export default GameDetailLayout