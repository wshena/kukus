'use client'
import GameDetailTabs from '@/components/GameDetailTabs'
import MainWrapper from '@/components/MainWrapper'
import GameDescription from '@/components/offMenu/GameDescription'
import { useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/redux/store'
import React from 'react'

const GameDetailLayout = ({params, children}:{params:any, children:React.ReactNode}) => {
  const resolvedParams:any = React.use(params);
  const { id, slug } = resolvedParams;

  const { isShowOffScreenDiv } = useAppSelector((state:RootState) => state.utility);
  const { description } = useAppSelector((state:RootState) => state.game);

  return (
    <>
      <MainWrapper>
        <GameDetailTabs id={id} slug={slug} />
        {children}
      </MainWrapper>

      {(isShowOffScreenDiv?.status === true && isShowOffScreenDiv?.type === 'game-description') && (
        <GameDescription description={description} />
      )}
    </>
  )
}

export default GameDetailLayout