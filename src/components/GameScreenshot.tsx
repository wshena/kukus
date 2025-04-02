'use client'
import { ZoomOutIcon } from '@/icons/Icon';
import { useAppDispatch } from '@/lib/hooks';
import { setGameScreenshots } from '@/lib/redux/slice/game.action';
import { setOffScreenDiv } from '@/lib/redux/slice/utility.action';
import { Box, Center } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react'

const GameScreenshot = ({data}:{data:any}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setOffScreenDiv({
      status: true,
      type: 'game-screenshot'
    }));

    dispatch(setGameScreenshots(data))
  }

  const [hover, setHover] = useState<boolean>(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const fallbackImage = '/image/placeholder-image.jpg';
  const initialSrc = data?.image || fallbackImage;
  
  const [imageSrc, setImageSrc] = useState(initialSrc)
  const [reloadCount, setReloadCount] = useState(0)
  
  const handleImageError = () => {
    if (reloadCount < 3) {
      setReloadCount(prev => prev + 1)
      // Tambahkan query param unik untuk menghindari cache
      setImageSrc(data?.image + `?reload=${new Date().getTime()}`)
    } else {
      setImageSrc(fallbackImage)
    }
  }

  return (
    <Center cursor={'pointer'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} position={'relative'}>
      <Box width={{base:'200px', md:'300px'}} height={{base:'180px', md:'200px'}} position={'relative'}>
        <Image src={imageSrc} fill alt={data?.id} loading='lazy' onError={handleImageError} />
      </Box>

      <Box position={'absolute'} cursor={'pointer'} width={'100%'} height={'100%'} top={0} left={0} zIndex={20} className='bg-black/70 transition-all duration-300 ease-in-out' opacity={hover ? '100%' : 0}>
        <button onClick={handleClick} className=' cursor-pointer w-full h-full'>
          <Center width={'100%'} height={'100%'}>
            <ZoomOutIcon size={25} color='white' />
          </Center>
        </button>
      </Box>
    </Center>
  )
}

export default GameScreenshot