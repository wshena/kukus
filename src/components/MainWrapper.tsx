import { Center, Stack } from '@chakra-ui/react'
import React from 'react'

const MainWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <Stack maxW={'1300px'} marginX={'auto'} paddingX={{base:'20px', md:'30px', xl:'0px'}} gap={{base:'20px', md:'30px'}}>
      {children}
    </Stack>
  )
}

export default MainWrapper