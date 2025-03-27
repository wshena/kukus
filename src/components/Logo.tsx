import { Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Heading fontWeight={'bold'} textTransform={'uppercase'} fontSize={{base:'20px', md:'20px'}}>kukus</Heading>
    </Link>
  )
}

export default Logo