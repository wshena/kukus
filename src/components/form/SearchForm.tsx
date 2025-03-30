'use client'
import { Center, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import SearchButton from '../buttons/SearchButton'
import { useRouter } from 'next/navigation'

const SearchForm = () => {
  const router = useRouter();
  const [input, setInput] = useState('');
  
  const handleInput = (e:any) => setInput(e.target.value);
  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (input && input.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(input)}`);
    }
  };

  return (
    <Center width={'100%'}>
      <form 
        action={`/search`} 
        method="get" 
        role='search' 
        className='w-[80%]'
        onSubmit={handleSubmit}
      >
        <Flex width={'100%'} paddingX={'1rem'} paddingY={'.5rem'} borderRadius={'10px'} bgColor={'gray.700'} color={'white'} alignItems={'center'} justifyContent={'space-between'}>
          <label htmlFor="game-search" className="sr-only">Search for games</label>
          <input 
            value={input || ''}
            onChange={handleInput} 
            type="search" 
            name="q" 
            id="game-search" 
            placeholder='Search game' 
            className='focus:outline-none bg-none w-[80%] bg-transparent' 
            aria-label="Search games"
            autoComplete='off'
          />
          <SearchButton type="submit" aria-label="Submit search" />
        </Flex>
      </form>
    </Center>
  )
}

export default SearchForm