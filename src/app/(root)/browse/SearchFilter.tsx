'use client'
import React from 'react'
import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

import { useGameList } from '@/hooks/useSWRCaching'

import GameCard from '@/components/cards/GameCard'
import CustomPagination from '@/components/Pagination'
import { CardSkeleton } from '@/components/skeletons/Skeletons'
import GridContentWrapper from '@/components/wrapper/GridContentWrapper'
import SortFilter from '@/components/filter/SortFilter'
import GenreFilter from '@/components/filter/GenreFilter'
import PlatformFilter from '@/components/filter/PlatformFilter'

const SearchFilter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Parameter map untuk mengonversi parameter URL ke parameter API
  const parameterMap: Record<string, string> = {
    order: 'ordering',
    genre: 'genres',
    platform: 'platforms' 
  };

  const apiParams: Record<string, any> = {};
  
  for (const [key, value] of searchParams.entries()) {
    const apiKey = parameterMap[key] || key; // Gunakan pemetaan atau gunakan key asli
    
    // Konversi nilai numerik ke angka
    if (!isNaN(Number(value))) {
      apiParams[apiKey] = Number(value);
    } else {
      apiParams[apiKey] = value;
    }
  }

  // Fungsi untuk menghapus semua filter dan kembali ke halaman browse
  const handleResetFilters = () => {
    router.push('/browse');
  };

  // Cek apakah ada filter yang diterapkan
  const hasFilters = searchParams.toString() !== '';

  const { data, error, isLoading } = useGameList(apiParams);

  if (error) return (
    <Center width={'100%'}>
      <div>Error loading game list.</div>
    </Center>
  );

  return (
    <>
      <Flex alignItems={'center'} gap={'20px'} width={'100%'} wrap="wrap">
        <SortFilter pathname={pathname} />
        <GenreFilter pathname={pathname} />
        <PlatformFilter pathname={pathname} />
        
        {hasFilters && (
          <button
            onClick={handleResetFilters}
          >
            <Box
              paddingY={'.5rem'}
              paddingX={'1rem'}
              color={'white'}
              borderRadius={'5px'}
              bgColor={'red.600'}
              cursor={'pointer'}
            >
              Reset Filters
            </Box>
          </button>
        )}
      </Flex>
      
      <GridContentWrapper>
        {isLoading ? (
          <>
            {Array.from({length:12}).map((_, idx) => (
              <CardSkeleton key={`skeleton-${idx}`} />
            ))}
          </>
        ) : (
          <>
            {(!data || 
              !data?.results || 
              data.results.length <= 0) ? (
              <Center gridColumn="1 / -1" p={8}>
                <Text>No games found matching your search criteria.</Text>
              </Center>
            ) : (
              <>
                {data?.results.map((item:any) => (
                  <Center width={'100%'} key={`game-${item.id}`}>
                    <GameCard data={item} />
                  </Center>
                ))}
              </>
            )}
          </>
        )}
      </GridContentWrapper>

      {data?.next && (
        <Center width={'100%'}>
          <CustomPagination count={data?.count} pageSize={data?.results?.length} defaultPage={1} />
        </Center>
      )}
    </>
  )
}

export default SearchFilter