'use client'
import { useGameAchievements } from '@/hooks/useSWRCaching';
import { useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/redux/store';
import { Center, Heading } from '@chakra-ui/react';
import React from 'react'

const Achievements = ({id, initialData}:{id:number, initialData:any}) => {
  const { name } = useAppSelector((state:RootState) => state.game);
  const { data, error, isLoading } = useGameAchievements(id ? Number(id) : null, initialData);
  
  if (error) return (
    <Center width={'100%'}>
      <div>Error loading game screenshots.</div>
    </Center>
  );
    
  if (data?.results?.length <= 0) return (
    <Center width={'100%'}>
      <div>Screenshots list not found.</div>
    </Center>
  );

  return (
    <>
      <Heading as={'h1'} fontWeight={'bold'} fontSize={{base:'2rem', md:'3rem'}} textTransform={'capitalize'}>
        {name} - Achievements
      </Heading>
    </>
  )
}

export default Achievements