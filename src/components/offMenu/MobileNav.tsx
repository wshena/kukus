'use client'
import React from 'react'
import { Box, Flex, Stack } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/redux/store'
import { setMobileNavMenu } from '@/lib/redux/slice/utility.action'
import { CloseMenuIcon } from '@/icons/Icon'
import Logo from '../Logo'

const CloseButton = ({handleClick}:{handleClick:any}) => {
  return (
    <button onClick={handleClick}>
      <CloseMenuIcon size={25} color='white' />
    </button>
  )
}

const MobileNav = () => {
  const dispatch = useAppDispatch();
  const { isMobileNavMenuClick } = useAppSelector((state:RootState) => state.utility);
  const handleCloseMenu = () => dispatch(setMobileNavMenu(false));

  return (
    <Box zIndex={100} position={'fixed'} width={'100vw'} height={'100vh'} padding={'20px'} bgColor={'black'} color={'white'} display={{base:'block', md:'none'}} top={0} transform={isMobileNavMenuClick ? 'translateX(0)' : 'translateX(100%)'} transition="transform 0.5s ease-in-out">
      <Stack width={'100%'} alignItems={'start'} gap={'20px'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
          <Logo />
          <CloseButton handleClick={handleCloseMenu} />
        </Flex>
      </Stack>
    </Box>
  )
}

export default MobileNav