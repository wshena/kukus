'use client'
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/login')}>
      <Box bgColor={'blue.500'} color={'white'} textTransform={'capitalize'} paddingY={'.4rem'} paddingX={'1.3rem'} borderRadius={'5px'}>
        <Text fontSize={{base:'.9rem', md:'.9rem'}}>login</Text>
      </Box>
    </button>
  )
}

export default LoginButton