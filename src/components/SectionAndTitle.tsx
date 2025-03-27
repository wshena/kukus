import { H1FontSize } from '@/constants'
import { AngleRightIcon } from '@/icons/Icon'
import { Flex, Heading, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const SectionAndTitle = ({type, title, url, children}:SectionAndTitleProps) => {
  return (
    <VStack width={'100%'} alignItems={'start'} gap={{base:'10px', md:'20px'}}>
      <Flex width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
        {url ? (
          <Link href={'#'}>
            <Flex alignItems={'center'} gap={'10px'} cursor={'pointer'}>
              <Heading as={'h1'} fontSize={H1FontSize} textTransform={'capitalize'} fontWeight={'bold'}>{title}</Heading>
              <AngleRightIcon size={20} color='white' />
            </Flex>
          </Link>
        ) : (
          <Heading as={'h1'} fontSize={H1FontSize} textTransform={'capitalize'} fontWeight={'bold'}>{title}</Heading>
        )}

        {type === 'carousel' && (
          <div className="">next and prev button</div>
        )}
      </Flex>
      {children}
    </VStack>
  )
}

export default SectionAndTitle