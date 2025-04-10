'use client'
import { useOffMenuClick } from '@/hooks/useOffMenuClick'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/redux/store'
import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import GameDescription from '../offMenu/GameDescription'
import GameScreenshots from '../offMenu/GameScreenshots'
import SearchForm from '../offMenu/SearchForm'
import CustomAlert from '../CustomAlert'
import { setAlert } from '@/lib/redux/slice/alert.action'

const MainWrapper = ({children}:{children:React.ReactNode}) => {
  const dispatch = useAppDispatch();

  const isMobileMenuClick = useOffMenuClick();
  
  const { isShowOffScreenDiv } = useAppSelector((state:RootState) => state.utility);
  const { description } = useAppSelector((state:RootState) => state.game);
  const { alert } = useAppSelector((state:RootState) => state.alert);

  useEffect(() => {
    if (alert.label === '') return;
    
    const timer = setTimeout(() => {
      dispatch(setAlert({
        label: '',
        message: '',
        type: 'info'
      }))
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <Stack 
      position={'relative'}
      maxW={'1000px'} 
      marginX={'auto'} 
      paddingTop={{base:'140px', md:'150px'}} 
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

      {(alert?.label !== '') && (
        <CustomAlert status={alert?.type} title={alert?.label} />
      )}
    </Stack>
  )
}

export default MainWrapper