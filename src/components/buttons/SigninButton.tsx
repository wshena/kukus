'use client'
import React from 'react'
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation'

const SigninButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/signin')}>
      <Box bgColor={'gray.800'} color={'white'} textTransform={'capitalize'} paddingY={'.4rem'} paddingX={'1.3rem'} borderRadius={'5px'}>
        <Text fontSize={{base:'.9rem', md:'.9rem'}}>sign in</Text>
      </Box>
    </button>
  )
}

export default SigninButton