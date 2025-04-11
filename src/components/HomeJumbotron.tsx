'use client'
import { truncateText } from '@/utils/actions/general.action'
import { Box, Center, Flex, Heading, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface SmallBoxProps {
  idx: number
  item_index: number
  handleClick: (idx: number, data:any) => void
  progress: number
  data: any
}

const SmallBox: React.FC<SmallBoxProps> = ({ idx, item_index, handleClick, progress, data }) => {
  return (
    <button
      className="hidden cursor-pointer md:block lg:w-full"
      onClick={() => handleClick(idx, data)}
    >
      <Flex
        padding=".3rem"
        width={{base:'200px', lg:'100%'}}
        height="fit-content"
        borderRadius="10px"
        backgroundColor={idx === item_index ? 'gray.600' : ''}
        position="relative"
        alignItems="center"
        justifyContent="start"
        className='border md:border-none'
        // Gunakan _after hanya jika box aktif
        _after={
          idx === item_index
            ? {
                content: '""',
                position: "absolute",
                borderRadius: "10px",
                top: 0,
                left: 0,
                height: "100%",
                zIndex: 10,
                width: `${progress}%`,
                backgroundColor: "gray.800",
                opacity: "0.2",
                transition: "width 0.1s linear",
              }
            : {}
        }
      >
        <Flex zIndex="20" alignItems="center" justifyContent={'start'} gap={'10px'}>
          <Box
            minWidth="50px"
            minHeight="60px"
            borderRadius="5px"
            backgroundColor="gray.900"
            position={'relative'}
          >
            <Image src={data?.background_image || '/images/cover_placeholder.jpg'} fill alt={'cover'} />
          </Box>
          <Heading as="h1" textAlign={'left'} fontSize={'.7rem'} className='leading-[16px]'>{truncateText(data?.name, 20)}</Heading>
        </Flex>
      </Flex>
    </button>
  )
}

const HomeJumbotron = ({itemList}:{itemList:any[]}) => {
  const [indexItem, setIndexItem] = useState(0)
  const [gameDetail, setGameDetail] = useState<any>(itemList[0])
  const [progress, setProgress] = useState(0)

  // Fungsi untuk mengganti index secara manual
  const handle_index_item = (idx: number, data:any) => {
    setGameDetail(data)
    setIndexItem(idx)
    setProgress(0)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 1)
    }, 100)
    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    if (progress >= 100) {
      setIndexItem((prevIndex) => {
        const newIndex = (prevIndex + 1) % itemList.length;
        setGameDetail(itemList[newIndex]);
        return newIndex;
      });
      setProgress(0);
    }
  }, [progress, itemList]);  

  return (
    <Box width="100%" height="fit">
      <Flex flexDirection={{base:'column', lg:'row'}} width="100%" alignItems="start" gap={{base:'20px', lg:'0px'}} justifyContent={{md: "space-between"}}>
        <Box
          width={{base:'100%', lg: "78%"}}
          height={{base:'200px', md:'400px', lg:'500px'}}
          backgroundColor="gray.500"
          borderRadius="10px"
          position={'relative'}
        >
          <Image src={gameDetail?.background_image || '/images/cover_placeholder.jpg'} alt={gameDetail?.name} fill className='rounded-[10px] z-10' />

          <Box zIndex={20} position={'absolute'} top={'0px'} left={'0px'} width={'100%'} height={'100%'} background={'linear-gradient(270deg, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%, #0B0B0B 100%)'}>
            <Flex position={'absolute'} top={0} left={0} width={'100%'} height={'100%'} padding={{base:'1rem', md:'2rem'}} alignItems={'start'} justifyContent={'end'} direction={'column'} color={'whiteAlpha.900'}>
              <Box>
                <Heading as={'h1'} fontWeight={'bold'} fontSize={{base:'1.3rem', md:'2rem'}} textTransform={'uppercase'}>{gameDetail?.name}</Heading>
                <Link href={`/game/${gameDetail?.id}/${gameDetail?.slug}`}>View Details</Link>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Stack
          width={{base:'100%', lg:'20%'}}
          height={{base:'fit', lg:'500px'}}
          alignItems="start"
          justifyContent="space-between"
          flexDir={{base:'row', lg:'column'}}
          overflowX={'auto'}
          flexWrap={'wrap'}
          gap={{base:'20px', lg:'0px'}}
        >
          {itemList.map((item:any, idx:number) => (
            <SmallBox
              key={item?.id}
              idx={idx}
              handleClick={handle_index_item}
              item_index={indexItem}
              progress={progress} // kirim progress ke setiap small box
              data={item}
            />
          ))}
        </Stack>
      </Flex>
    </Box>
  )
}

export default HomeJumbotron