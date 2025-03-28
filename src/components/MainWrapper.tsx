'use client'
import { useOffMenuClick } from '@/hooks/useOffMenuClick'
import { Stack } from '@chakra-ui/react'
import React from 'react'

const MainWrapper = ({children}:{children:React.ReactNode}) => {
  const isMobileMenuClick = useOffMenuClick();

  return (
    <Stack 
      maxW={'1000px'} 
      marginX={'auto'} 
      paddingY={{base:'80px', md:'80px'}} 
      paddingX={{base:'20px', md:'30px', xl:'0px'}} 
      gap={{base:'30px', md:'45px', lg:'60px'}} 
      height={isMobileMenuClick ? '100vh' : 'fit-content'} 
      overflowY={isMobileMenuClick ? 'hidden' : 'auto'}>
      {children}
    </Stack>
  )
}

export default MainWrapper