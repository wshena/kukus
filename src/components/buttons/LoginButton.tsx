import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react'

const LoginButton = () => {
  return (
    <Link href={'/login'} className='cursor-pointer'>
      <Box bgColor={'blue.500'} color={'white'} textTransform={'capitalize'} paddingY={'.4rem'} paddingX={'1.3rem'} borderRadius={'5px'}>
        <Text fontSize={{base:'.9rem', md:'.9rem'}}>login</Text>
      </Box>
    </Link>
  )
}

export default LoginButton