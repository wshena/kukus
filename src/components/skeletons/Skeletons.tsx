import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { CardHeight, CardWidth } from '@/constants'

export const CardSkeleton = () => {
  return (
    <VStack width={CardWidth} gap={{base:'10px', md:'15px'}} alignItems={'start'}>
      <Box width={'100%'} height={CardHeight} bgColor={'gray.700'} borderRadius={'10px'} />
      <Box width={'100%'} height={'10px'} bgColor={'gray.700'} borderRadius={'10px'}></Box>
      <Box width={'50%'} height={'10px'} bgColor={'gray.700'} borderRadius={'10px'}></Box>
    </VStack>
  )
}