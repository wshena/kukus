import { NavLinks } from '@/constants'
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import MobileNavMenuButton from './buttons/MobileNavMenuButton'
import Logo from './Logo'
import SigninButton from './buttons/SigninButton'
import LoginButton from './buttons/LoginButton'

const NavLink = ({data}:{data:NavLinkProps}) => {
  return (
    <Link href={data.link}>
      <Text textTransform={'capitalize'} fontSize={{base:'1rem', md:'1rem',}}>{data.label}</Text>
    </Link>
  )
}

const Navbar = () => {
  return (
    <Center width={'100%'} position={'fixed'} top={0} zIndex={50} bgColor={'black'}>
      <Box width={'1200px'}>
        <nav className=''>
          <Flex paddingY={'1rem'} paddingX={{base:'20px', md:'20px', xl:'0px'}} width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
            <Box display={{base:'block', md:'none'}}>
              <Logo />
            </Box>
            <MobileNavMenuButton />
            <Flex display={{base:'none', md:'flex'}} alignItems={'center'} gap={'20px'}>
              <Logo />
              {NavLinks?.map((item:NavLinkProps) => (
                <NavLink data={item} key={item.id} />
              ))}
            </Flex>
            <Flex display={{base:'none', md:'flex'}} alignItems={'center'} gap={'10px'}>              
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