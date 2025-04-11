'use client'
import React from 'react'
import { Box, Center, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useAppDispatch } from '@/lib/hooks';
import { setMobileNavMenu } from '@/lib/redux/slice/utility.action';

const SigninButton = () => {
  const dispatch = useAppDispatch();
  const handleCloseMenu = () => dispatch(setMobileNavMenu(false));

  return (
    <Link href={'/signin'} onClick={handleCloseMenu} className={'w-full md:w-fit cursor-pointer'}>
      <Center width={{base:'100%', md:'fit-content'}} bgColor={'gray.800'} color={'white'} textTransform={'capitalize'} paddingY={'.4rem'} paddingX={'1.3rem'} borderRadius={'5px'}>
        <Text fontSize={{base:'.9rem', md:'.9rem'}}>sign in</Text>
      </Center>
    </Link>
  )
}

export default SigninButton