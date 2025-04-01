import { Center, Grid } from '@chakra-ui/react'
import React from 'react'

const GridContentWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <Center width={'100%'}>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)', xl: 'repeat(6, 1fr)' }}
        gap={{ base: '15px', md: '20px' }}
        width={'100%'}
      >
        {children}
      </Grid>
    </Center>
  )
}

export default GridContentWrapper