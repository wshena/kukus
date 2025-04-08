import React from 'react'
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

const SigninButton = () => {
  return (
    <Link href={'/signin'} className={'cursor-pointer'}>
      <Box bgColor={'gray.800'} color={'white'} textTransform={'capitalize'} paddingY={'.4rem'} paddingX={'1.3rem'} borderRadius={'5px'}>
        <Text fontSize={{base:'.9rem', md:'.9rem'}}>sign in</Text>
      </Box>
    </Link>
  )
}

export default SigninButton