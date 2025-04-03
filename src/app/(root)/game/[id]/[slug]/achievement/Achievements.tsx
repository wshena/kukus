'use client'
import AchievementCard from '@/components/AchievementCard';
import CustomPagination from '@/components/Pagination';
import { GameAchievementSkeleton } from '@/components/skeletons/Skeletons';
import { useGameAchievements } from '@/hooks/useSWRCaching';
import { useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/redux/store';
import { Box, Center, Heading, Stack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Achievements = ({id, initialData}:{id:number, initialData:any}) => {
  const searchParams = useSearchParams()
  const page = searchParams.get('page') || 1;

  const { name } = useAppSelector((state:RootState) => state.game);
  const { data, error, isLoading } = useGameAchievements(id ? Number(id) : null, initialData, {
    page: page
  });

  if (error) return (
    <Center width={'100%'}>
      <div>Error loading game achievement.</div>
    </Center>
  );
    
  if (data?.results?.length <= 0) return (
    <Center width={'100%'}>
      <div>Achievements list not found.</div>
    </Center>
  );

  return (
    <>
      <Heading as={'h1'} lineHeight={{base:'2rem', md:'3rem'}} fontWeight={'bold'} fontSize={{base:'2rem', md:'3rem'}} textTransform={'capitalize'}>
        {name} - Achievements
      </Heading>

      {isLoading ? (
        <Stack width={'100%'} alignItems={'start'} gap={{base:'25px', md:'30px'}}>
          {Array.from({length:12}).map((_,idx:number) => (
            <GameAchievementSkeleton key={idx} />
          ))}
        </Stack>
      ) : (
        <Stack width={'100%'} alignItems={'start'} gap={{base:'25px', md:'30px'}}>
          {data?.results?.map((item:GameAchievementProps) => (
            <Box key={item.id} width={'100%'} paddingBottom={'15px'} borderBottom={'1px solid white'}>
              <AchievementCard data={item} />
            </Box>
          ))}
        </Stack>
      )}

      {data?.next && (
        <Center width={'100%'}>
          <CustomPagination count={data?.count} pageSize={data?.results?.length} defaultPage={1} />
        </Center>
      )}
    </>
  )
}

export default Achievements