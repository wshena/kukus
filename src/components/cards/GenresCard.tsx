'use client'
import { Box, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const GenresCard = ({data}:{data:GameGenresProps}) => {
  const fallbackImage = '/image/placeholder-image.jpg';
  const initialSrc = data?.image_background || fallbackImage;

  const [imageSrc, setImageSrc] = useState(initialSrc)
  const [reloadCount, setReloadCount] = useState(0)

  const handleImageError = () => {
    if (reloadCount < 3) {
      setReloadCount(prev => prev + 1)
      // Tambahkan query param unik untuk menghindari cache
      setImageSrc(data?.image_background + `?reload=${new Date().getTime()}`)
    } else {
      setImageSrc(fallbackImage)
    }
  }

  return (
    <Link href={`/genre/${data?.id}/${data?.slug}`}>
      <Stack alignItems={'center'} gap={'15px'}>
        <Box cursor={'pointer'} position={'relative'} width={{base:'130px', md:'155px', lg:'180px'}} height={{base:'150px', md:'166px', lg:'200px'}}>
          <Image src={imageSrc} onError={handleImageError} alt={data?.name} fill style={{
            objectFit: 'cover',
            borderRadius: '10px'
          }} />
        </Box>
        <Text textTransform={'capitalize'} fontSize={{base:'1rem', md:'1.2rem'}}>{data?.name}</Text>
      </Stack>
    </Link>
  )
}

export default GenresCard