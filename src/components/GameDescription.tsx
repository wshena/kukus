'use client'
import React, { useState } from 'react'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { truncateText } from '@/utils/actions/general.action';
import { useAppDispatch } from '@/lib/hooks';
import { setOffScreenDiv } from '@/lib/redux/slice/utility.action';
import { setGameDescription } from '@/lib/redux/slice/game.action';

const GameDescription = ({description}:{description:string}) => {
  const dispatch = useAppDispatch();
  const handleShowMore = () => {
    dispatch(setOffScreenDiv({
      status: true,
      type: 'game-description'
    }))

    dispatch(setGameDescription(description))
  }
  return (
    <Stack alignItems={'start'} gap={'10px'}>
      <Heading as='h1' fontSize={'1.5rem'} fontWeight={'bold'}>About</Heading>
      <Text
        fontSize="1rem"
        color="gray.200"
        dangerouslySetInnerHTML={{ __html: truncateText(description, 200) }}
      />
      <button onClick={handleShowMore}>
        <Text cursor={'pointer'}>Show More</Text>
      </button>
    </Stack>
  )
}

export default GameDescription