'use client'
import React, { useState } from 'react'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/redux/store'
import { setMobileNavMenu } from '@/lib/redux/slice/utility.action'
import { CloseMenuIcon, SearchIcon } from '@/icons/Icon'
import Logo from '../Logo'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { NavLinks } from '@/constants'

const CloseButton = ({handleClick}:{handleClick:any}) => {
  return (
    <button onClick={handleClick}>
      <CloseMenuIcon size={25} color='white' />
    </button>
  )
};

const NavLink = ({data, pathname}:{data:NavLinkProps, pathname:string}) => {
  const dispatch = useAppDispatch();
  const handleCloseMenu = () => dispatch(setMobileNavMenu(false));

  return (
    <Link href={data.link} onClick={handleCloseMenu}>
      <Text textTransform={'capitalize'} fontSize={{base:'1rem', md:'1rem',}} fontWeight={data.link === pathname ? 'bold' : 'normal'}>{data.label}</Text>
    </Link>
  )
};

const MobileForm = ({handleCloseMenu}:{handleCloseMenu:any}) => {
  const router = useRouter();
  const [input, setInput] = useState('');

  const handleInput = (e:any) => setInput(e.target.value);
  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (input && input.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(input)}`);
      handleCloseMenu();
    }
  };
  
  return (
    <form
      action={`/search`} 
      method="get" 
      role='search' 
      className='w-full'
      onSubmit={handleSubmit}
    >
      <Flex width={'100%'} color={'white'} alignItems={'center'} justifyContent={'space-between'} paddingBottom={'10px'} borderBottom={'1px solid white'}>
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
        <button type={'submit'} className='cursor-pointer' aria-label='search some games' role='search'>
          <SearchIcon size={25} color='white' />
        </button>
      </Flex>
    </form>
  )
}

const MobileNav = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  
  const { isMobileNavMenuClick } = useAppSelector((state:RootState) => state.utility);
  const handleCloseMenu = () => dispatch(setMobileNavMenu(false));

  return (
    <Box zIndex={100} position={'fixed'} width={'100vw'} height={'100vh'} padding={'20px'} bgColor={'black'} color={'white'} display={{base:'block', md:'none'}} top={0} transform={isMobileNavMenuClick ? 'translateX(0)' : 'translateX(100%)'} transition="transform 0.5s ease-in-out">
      <Stack width={'100%'} alignItems={'start'} gap={'20px'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
          <Logo />
          <CloseButton handleClick={handleCloseMenu} />
        </Flex>
        <Stack alignItems={'start'} gap={'20px'} width={'100%'}>
          <MobileForm handleCloseMenu={handleCloseMenu} />
          {NavLinks?.map((item:NavLinkProps) => {
            return (
              <NavLink data={item} key={item.id} pathname={pathname} />
            )
          })}
        </Stack>
      </Stack>
    </Box>
  )
}

export default MobileNav