'use client'
import { CloseMenuIcon } from '@/icons/Icon'
import { useAppDispatch } from '@/lib/hooks'
import { setOffScreenDiv } from '@/lib/redux/slice/utility.action'
import { Box, Center, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const GameDescription = ({description}:{description:string}) => {
  const dispatch = useAppDispatch();

  return (
    <Center zIndex={100} position={'fixed'} top={0} width={'100%'} height={'100vh'}  className='bg-black/70'>
      <Stack width={{base:'90%', "2xl": '50%'}} height={{base:'80%', md:'fit-content'}} padding={'1rem'} borderRadius={'10px'} bgColor={'gray.900'} gap={'20px'} overflowY={'auto'}>
        <Flex width={'100%'} alignItems={'center'} justifyContent={'flex-end'}>
          <button className='cursor-pointer' onClick={() => dispatch(setOffScreenDiv({
            status: false,
            type: '',
          }))}>
            <CloseMenuIcon size={25} color='white' />
          </button>
        </Flex>
        <Text
          fontSize="1rem"
          color="gray.200"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Stack>
    </Center>
  )
}

export default GameDescription