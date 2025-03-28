'use client'
import { DetailTabs } from '@/constants'
import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const GameDetailTabs = ({id, slug}:{id:number, slug:string}) => {
  const currentPath = usePathname();
  const baseUrl = `/game/${id}/${slug}`;

  return (
    <Box width={'100%'} overflowX={'auto'}>
      <Flex alignItems={'center'} width={{base:'490px', md:'100%'}} gap={{base:'15px', md:'20px'}}>
        {DetailTabs?.map((item:any) => {
          const generateUrl = () => {
            switch (item.label) {
              case 'overview':
                return `${baseUrl}`;
              case 'achievement':
                return `${baseUrl}/achievement`;
              case 'screenshots':
                return `${baseUrl}/screenshot`;
              case 'add-ons':
                return `${baseUrl}/add-on`;
              case 'same series':
                return `${baseUrl}/same-series`;
              default:
                return baseUrl;
            }
          };

          const itemUrl = generateUrl();

          return (
            <Link key={item.id} href={itemUrl}>
              <Text 
                paddingBottom={'10px'} 
                borderBottom={itemUrl === currentPath ? '1px solid blue' : 'none'} 
                color={itemUrl === currentPath ? 'white' : 'gray.500'} 
                _hover={{color:'white'}} 
                textTransform={'capitalize'}
              >
                {item.label}
              </Text>
            </Link>
          )
        })}
      </Flex>
    </Box>
  )
}

export default GameDetailTabs