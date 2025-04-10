'use client'
import { UserIcon } from '@/icons/Icon'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import LogoutButton from './LogoutButton'

const ProfileButton = ({userEmail}:{userEmail:string}) => {
  const [hover, setHover] = useState<boolean>(false);
  
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative'>
      <Flex alignItems={'center'} gap={'10px'} padding={'.7rem'} cursor={'pointer'} _hover={{bgColor:'gray.700'}}>
        <UserIcon size={25} color='white' />
        <Text>{userEmail}</Text>
      </Flex>

      {hover && (
        <Box position={'absolute'} width={'fit-content'} height={'fit'} right={0} bottom={'-100px'} padding={'1rem'} borderRadius={'10px'} bgColor={'gray.700'}>
          <Stack alignItems={'start'} gap={'20px'}>
            <Link href={'/wishlist'}>Wishlist</Link>
            <LogoutButton />
          </Stack>
        </Box>
      )}
    </button>
  )
}

export default ProfileButton