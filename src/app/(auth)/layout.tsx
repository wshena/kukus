'use client'
import React, { useEffect } from 'react'
import Logo from '@/components/Logo'
import { Center, Stack } from '@chakra-ui/react'
import ProgressBarProvider from '@/components/providers/ProgressBarProvider'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/redux/store'
import { setAlert } from '@/lib/redux/slice/alert.action'
import CustomAlert from '@/components/CustomAlert'

const layout = ({children}:{children:React.ReactNode}) => {
  const dispatch = useAppDispatch();
  const {alert} = useAppSelector((state:RootState) => state.alert);

  useEffect(() => {
    if (alert.label === '') return;
    
    const timer = setTimeout(() => {
      dispatch(setAlert({
        label: '',
        message: '',
        type: 'info'
      }))
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <ProgressBarProvider>
      <Center width={'100vw'} height={'100vh'} paddingY={'50px'} paddingBottom={'50px'} position={'relative'}>
        <Stack width={'100%'} alignItems={'center'} gap={'30px'}>
          {alert.label !== '' && (
            <CustomAlert status={alert.type} title={alert.label} />
          )}
          <Center width={'100%'}>
            <Logo />
          </Center>
          <Stack alignItems={'center'} width={{base:'100%', md:'500px'}} gap={{base:'50px', lg:'80px'}} paddingX={{base:'20px', md:'0px'}}>
            {children}
          </Stack>
        </Stack>
      </Center>
    </ProgressBarProvider>
  )
}

export default layout