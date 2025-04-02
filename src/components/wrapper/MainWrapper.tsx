'use client'
import { useOffMenuClick } from '@/hooks/useOffMenuClick'
import { useShowOffScreenDiv } from '@/hooks/useShowOffScreenDiv'
import { Stack } from '@chakra-ui/react'
import React from 'react'

const MainWrapper = ({children}:{children:React.ReactNode}) => {
  const isMobileMenuClick = useOffMenuClick();
  const isShowOffScreenDiv = useShowOffScreenDiv();

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
    </Stack>
  )
}

export default MainWrapper