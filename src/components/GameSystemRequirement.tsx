import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const GameSystemRequirement = ({platform, name}:{platform:any, name:string}) => {
  return (
    <Box key={platform.platform.id}>
      {Object.keys(platform?.requirements).length !== 0 && (
        <Stack key={platform?.platform.id} alignItems={'start'}>
          <Heading as={'h1'} fontSize={'1.5rem'} fontWeight={'bold'} textTransform={'capitalize'}>
              {name} system requirement for {platform?.platform?.name}
          </Heading>
          <Stack gap={'10px'} padding={'1rem'} borderRadius={'10px'} bgColor={'gray.700'}>
            {platform?.requirements?.minimum && (
              <Text whiteSpace="pre-line">
                {platform?.requirements?.minimum}
              </Text>
            )}
            {platform?.requirements?.recommended && (
              <Text whiteSpace="pre-line">
                {platform?.requirements?.recommended?.replaceAll('&quot;', '"')}
              </Text>
            )}
          </Stack>
        </Stack>
      )}
    </Box>
  )
}

export default GameSystemRequirement