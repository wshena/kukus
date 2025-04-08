import { Box, Flex, Grid, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { FacebookIcon, TwitterIcon, YoutubeIcon } from '../icons/Icon'
import Logo from './Logo'
import { FooterLinks, Terms } from '@/constants'

const Footer = () => {
  return (
    <Box width={'100%'} bgColor={'gray.900'}>
      <Stack gap={'25px'} width={'100%'} paddingY={'50px'} paddingX={{base:'20px', md:'50px', lg:'100px'}}>
        <Flex alignItems={'center'} gap={'15px'}>
          <Link href={'#'}> <FacebookIcon size={25} color='white' /> </Link>
          <Link href={'#'}> <TwitterIcon size={25} color='white' /> </Link>
          <Link href={'#'}> <YoutubeIcon size={25} color='white' /> </Link>
        </Flex>
        <Stack width={'100%'} direction={{base:'column', lg:'row'}} alignItems={'start'} justifyContent={{base:'start', md:'space-between'}}>
          {FooterLinks?.map((item:any) => (
            <Stack key={item?.id} alignItems={'start'} width={'fit'} textTransform={'capitalize'}>
              <Heading as={'h1'} fontSize={{base:'1rem', md:'1.4rem'}} color={'gray.600'}>{item?.title}</Heading>
              <Grid templateColumns={{base:'', md:'repeat(3, 1fr)'}} gapX={'20px'}>
                {item?.links?.map((item:string, idx:number) => (
                  <Link key={`${item} - ${idx}`} href={'#'}>
                    <Heading as={'h2'} fontSize={{base:'.9rem', md:'1rem'}} className='hover:underline'>{item}</Heading>
                  </Link>
                ))}
              </Grid>
            </Stack>
          ))}
        </Stack>
        <Text fontSize={{base:'.9rem', md:'1rem'}} color={'gray.300'} paddingTop={'25px'} className='border-t'>© 2025, Kukus, Inc. All rights reserved. Kukus, the Kukus logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Kukus, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.
        Our websites may contain links to other sites and resources provided by third parties. These links are provided for your convenience only. Kukus has no control over the contents of those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</Text>
        <Flex flexDirection={{base:'column', md:'row'}} gap={{base:'20px', md:'0px'}} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'} flexWrap={'wrap'} gapX={'20px'}>
            {Terms?.map((item:string, idx:number) => (
              <Link key={`${item} - ${idx}`} href={'#'} className='hover:underline'>
                <Heading as={'h2'} fontSize={'1rem'} textTransform={'capitalize'}>{item}</Heading>
              </Link>
            ))}
          </Flex>
          <Logo />
        </Flex>
      </Stack>
    </Box>
  )
}

export default Footer