'use client'
import { SearchIcon } from '@/icons/Icon';
import { useAppDispatch } from '@/lib/hooks';
import { setOffScreenDiv } from '@/lib/redux/slice/utility.action';
import { getGameList } from '@/utils/actions/fetcher.action';
import { Box, Center, Flex, Grid, Heading, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import GridContentWrapper from '../wrapper/GridContentWrapper';
import { CardSkeleton } from '../skeletons/Skeletons';
import GameCard from '../cards/GameCard';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Cek apakah input kosong (tanpa spasi)
    if (!input.trim()) {
      setResult(null);  // atau state default lain sesuai kebutuhan
      setLoading(false);
      return; // hentikan eksekusi useEffect
    }
  
    // Buat timer debouncing selama 500ms
    const timer = setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await getGameList({
            search: `'${input}'`,
            page_size: 5
          });
          setResult(response);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, 500);
  
    // Bersihkan timer jika input berubah sebelum delay habis
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <Box position={'fixed'} zIndex={100} width={'100%'} height={'100vh'} top={0} left={0} bgColor={'gray.900'} paddingY={{base:'20px', md:'3rem'}}  
    onClick={() => {
      dispatch(setOffScreenDiv({
        status: false,
        type:''
      }))
    }}>
      <Center width={'100%'} overflowY={'auto'}>
        <Stack gap={{base:'20px', md:'30px'}} width={{base:'90%', md:'80%', lg:'70%'}}>
          <form 
            action={`/search?q=${input}&page=1`}
            method="get"
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/search?q=${input}`);
            }}
            className="w-[100%]"
            onClick={(e) => e.stopPropagation()}
          >
            <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'} pb={'10px'} borderBottom={'1px solid white'}>
              <input value={input} onChange={(e:any) => setInput(e.target.value)} type="text" name="search-input" id="search-input" placeholder='Search game title' autoComplete='off' className='w-full focus:outline-none' />

              <button type="submit" className='cursor-pointer'>
                <SearchIcon size={25} color='white' />
              </button>
            </Flex>
          </form>


          {!result || result?.res?.results?.length <= 0 ? (
            <Heading as={'h1'}>No Results</Heading>
          ) : (
            <>
              <GridContentWrapper>
                {loading ? (
                  <>
                    {Array.from({length:10}).map((_,idx:number) => (
                      <CardSkeleton key={idx} />
                    ))}
                  </>
                ) : (
                  <>
                    {result?.res?.results?.map((item: any, idx:number) => (
                      <GameCard key={`${item.mal_id}- ${idx}`} data={item} />
                    ))}
                  </>
                )}
              </GridContentWrapper>
              <Center width={'100%'}>
                <Link href={`/search?q=${input}&page=1`}>See More</Link>
              </Center>
            </>
          )}

        </Stack>
      </Center>
    </Box>
  )
}

export default SearchForm