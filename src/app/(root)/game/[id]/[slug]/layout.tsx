'use client'
import GameDetailTabs from '@/components/GameDetailTabs'
import MainWrapper from '@/components/MainWrapper'
import GameDescription from '@/components/offMenu/GameDescription'
import { useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/redux/store'
import { Box } from '@chakra-ui/react'
import React from 'react'

const GameDetailLayout = ({params, children}:{params:any, children:React.ReactNode}) => {
  const resolvedParams:any = React.use(params);
  const { id, slug } = resolvedParams;

  const { isShowOffScreenDiv } = useAppSelector((state:RootState) => state.utility);
  const { description } = useAppSelector((state:RootState) => state.game);

  return (
    <>
      <GameDetailTabs id={id} slug={slug} />
      <Box marginTop={'70px'}>
        <MainWrapper>
          {children}
        </MainWrapper>
      </Box>

      {(isShowOffScreenDiv?.status === true && isShowOffScreenDiv?.type === 'game-description') && (
        <GameDescription description={description} />
      )}
    </>
  )
}

export default GameDetailLayout