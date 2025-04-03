'use client'
import { NavLinks } from '@/constants'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import MobileNavMenuButton from './buttons/MobileNavMenuButton'
import Logo from './Logo'
import SigninButton from './buttons/SigninButton'
import LoginButton from './buttons/LoginButton'
import SearchButton from './buttons/SearchButton'
import { usePathname } from 'next/navigation'

const NavLink = ({data, pathname}:{data:NavLinkProps, pathname:string}) => {
  return (
    <Link href={data.link}>
      <Text textTransform={'capitalize'} fontSize={{base:'1rem', md:'1rem',}} fontWeight={data.link === pathname ? 'bold' : 'normal'}>{data.label}</Text>
    </Link>
  )
}

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <Center aria-label='main menu' width={'100%'} position={'fixed'} top={0} zIndex={50} bgColor={'black'}>
      <Box width={'1200px'} paddingBottom={'1rem'}>
        <nav className=''>
          <Flex paddingY={'1rem'} paddingX={{base:'20px', md:'20px', xl:'0px'}} width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
            {/* mobile nav */}
            <Box display={{base:'block', md:'none'}}>
              <Logo />
            </Box>
            <MobileNavMenuButton />

            {/* desktop nav */}
            <Flex display={{base:'none', md:'flex'}} alignItems={'center'} gap={'20px'}>
              <Logo />
              {NavLinks?.map((item:NavLinkProps) => {
                return (
                  <NavLink data={item} key={item.id} pathname={pathname} />
                )
              })}
            </Flex>
            <Flex display={{base:'none', md:'flex'}} alignItems={'center'} gap={'10px'}>
              <SearchButton />
              <LoginButton />
              <SigninButton />
            </Flex>
          </Flex>
        </nav>
      </Box>
    </Center>
  )
}

export default Navbar