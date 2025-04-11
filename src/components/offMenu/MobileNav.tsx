'use client'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/redux/store'
import { setMobileNavMenu } from '@/lib/redux/slice/utility.action'
import { CloseMenuIcon, SearchIcon } from '@/icons/Icon'
import Logo from '../Logo'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { NavLinks } from '@/constants'
import { getCurrentUser } from '@/utils/actions/auth.action'
import LogoutButton from '../buttons/LogoutButton'
import LoginButton from '../buttons/LoginButton'
import SigninButton from '../buttons/SigninButton'

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

  const userData = useAppSelector((state: RootState) => state.auth.user);
  const { isMobileNavMenuClick } = useAppSelector((state:RootState) => state.utility);
  const handleCloseMenu = () => dispatch(setMobileNavMenu(false));

  console.log(userData)

  return (
    <Box zIndex={100} position={'fixed'} width={'100vw'} height={'100vh'} padding={'20px'} bgColor={'black'} color={'white'} display={{base:'block', md:'none'}} top={0} transform={isMobileNavMenuClick ? 'translateX(0)' : 'translateX(100%)'} transition="transform 0.5s ease-in-out">
      <Stack width={'100%'} alignItems={'start'} gap={'20px'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
          <Logo />
          <CloseButton handleClick={handleCloseMenu} />
        </Flex>
        <Stack alignItems={'start'} justifyContent={'space-between'} width={'100%'} height={'80vh'}>
          <Stack width={'100%'} alignItems={'start'} gap={'20px'}>
            <Heading as={'h1'}>{userData?.email}</Heading>
            <MobileForm handleCloseMenu={handleCloseMenu} />
            {NavLinks?.map((item:NavLinkProps) => {
              return (
                <NavLink data={item} key={item.id} pathname={pathname} />
              )
            })}
            {userData && (<NavLink data={{
              id: 3,
              label: 'wishlist',
              link: '/wishlist'
            }} pathname={pathname} />)}
          </Stack>

          {userData ? (
            <LogoutButton />
          ) : (
            <Stack width={'100%'} alignItems={'center'} gap={'20px'}>
              <LoginButton />
              <SigninButton />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Box>
  )
}

export default MobileNav