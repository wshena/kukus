'use client'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setOffScreenDiv } from '@/lib/redux/slice/utility.action'
import { RootState } from '@/lib/redux/store'
import { Box, Center, Flex, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const GameScreenshots = () => {
  const dispatch = useAppDispatch();
  const { gameScreenshots } = useAppSelector((state:RootState) => state.game);

  return (
    <Center zIndex={100} width={'100%'} height={'100vh'} position={'fixed'} top={0} left={0} className='bg-black/90' padding={{base:'20px', md:'2rem', '2xl':'3.5rem'}} onClick={() => dispatch(setOffScreenDiv({
      status: false,
      type: '',
    }))}>
      <Center width={'100%'} overflowY={'auto'}>
        <Box width={'100%'} height={{base:'200px', md:'400px', lg:'500px',xl:'600px', '2xl':'800px'}} position={'relative'} aspectRatio={16/9}>
          <Image 
            src={gameScreenshots?.image} 
            alt={`${gameScreenshots?.id}`} 
            fill 
            loading='lazy' 
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </Center>
    </Center>
  )
}

export default GameScreenshots