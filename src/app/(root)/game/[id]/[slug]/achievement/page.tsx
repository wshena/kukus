'use client'
import { useGameAchievements } from '@/hooks/useSWRCaching';
import { Center, Heading } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import React from 'react'

const page = () => {
  const params = useParams();
  const id = params?.id;  

  const { data, error, isLoading } = useGameAchievements(id ? Number(id) : null);
  
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
        Game Achievements
      </Heading>
    </>
  )
}

export default page