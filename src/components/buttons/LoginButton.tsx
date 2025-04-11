'use client'
import { useAppDispatch } from '@/lib/hooks';
import { setMobileNavMenu } from '@/lib/redux/slice/utility.action';
import { Box, Center, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react'

const LoginButton = () => {
  const dispatch = useAppDispatch();
  const handleCloseMenu = () => dispatch(setMobileNavMenu(false));

  return (
    <Link onClick={handleCloseMenu} href={'/login'} className='w-full md:w-fit cursor-pointer'>
      <Center width={{base:'100%', md:'fit-content'}} bgColor={'blue.500'} color={'white'} textTransform={'capitalize'} paddingY={'.4rem'} paddingX={'1.3rem'} borderRadius={'5px'}>
        <Text fontSize={{base:'.9rem', md:'.9rem'}}>login</Text>
      </Center>
    </Link>
  )
}

export default LoginButton