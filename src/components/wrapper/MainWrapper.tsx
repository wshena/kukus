'use client'
import { useOffMenuClick } from '@/hooks/useOffMenuClick'
import { useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/redux/store'
import { Stack } from '@chakra-ui/react'
import React from 'react'
import GameDescription from '../offMenu/GameDescription'
import GameScreenshots from '../offMenu/GameScreenshots'
import SearchForm from '../offMenu/SearchForm'

const MainWrapper = ({children}:{children:React.ReactNode}) => {
  const isMobileMenuClick = useOffMenuClick();
  
  const { isShowOffScreenDiv } = useAppSelector((state:RootState) => state.utility);
  const { description } = useAppSelector((state:RootState) => state.game);


  return (
    <Stack 
      position={'relative'}
      maxW={'1000px'} 
      marginX={'auto'} 
      paddingTop={{base:'100px', md:'150px'}} 
      paddingBottom={'50px'}
      paddingX={{base:'20px', md:'30px', xl:'0px'}} 
      gap={{base:'30px', md:'45px', lg:'60px'}} 
      height={(isMobileMenuClick || isShowOffScreenDiv.status === true) ? '100vh' : 'fit-content'}
      overflowY={(isMobileMenuClick || isShowOffScreenDiv.status === true) ? 'hidden' : 'auto'}>
      {children}

      {(isShowOffScreenDiv?.status === true && isShowOffScreenDiv?.type === 'game-description') && (
        <GameDescription description={description} />
      )}

      {(isShowOffScreenDiv?.status === true && isShowOffScreenDiv?.type === 'game-screenshot') && (
        <GameScreenshots />
      )}

      {(isShowOffScreenDiv?.status === true && isShowOffScreenDiv?.type === 'search-form') && (
        <SearchForm />
      )}
    </Stack>
  )
}

export default MainWrapper