'use client'
import { UserIcon } from '@/icons/Icon'
import {
  Box,
  Flex,
  Stack,
  Text,
  Popover,
  Portal,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton'

const ProfileButton = ({ userEmail }: { userEmail: string }) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Box cursor="pointer">
          <Flex
            alignItems="center"
            gap="10px"
            padding=".7rem"
            borderRadius="5px"
            _hover={{ bgColor: 'gray.700' }}
          >
            <UserIcon size={20} color="white" />
            <Text>{userEmail}</Text>
          </Flex>
        </Box>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content width={'fit-content'}>
            <Popover.Arrow />
            <Popover.Body bgColor={'gray.900'} padding={'1rem'}>
              <Stack alignItems="center" width={'100%'} gap="20px">
                <Link href="/wishlist" className='focus:outline-none text-center w-full'>
                  <Text fontSize={'1rem'}>Wishlist</Text>
                </Link>
                <LogoutButton />
              </Stack>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}

export default ProfileButton
