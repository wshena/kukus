'use client'
import { useAppDispatch } from '@/lib/hooks';
import { setAlert } from '@/lib/redux/slice/alert.action';
import { logout } from '@/utils/actions/auth.action';
import { Center, Spinner, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function useLogout() {
  const router = useRouter();
  
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const performLogout = async () => {
    if (isLoggingOut) return;

    console.log('Memulai proses logout...');
    setIsLoggingOut(true);
    setError(null);

    try {
      await logout();
      await new Promise(resolve => setTimeout(resolve, 300));

      console.log('Mengalihkan ke halaman login');
      router.push('/login');

      setIsLoggingOut(false);

    } catch (err: any) {
      console.error('Error selama logout:', err.message);
      setError(err.message || 'Terjadi kesalahan saat logout');
      setIsLoggingOut(false);
    }
  };

  return { performLogout, isLoggingOut, error };
}

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const { performLogout, isLoggingOut, error } = useLogout();

  if (error) {
    dispatch(setAlert({
      label: error,
      type: 'error'
    }))
  };

  return (
    <button onClick={performLogout}>
      <Center width={'200px'} bgColor={'red.500'} padding={'.5rem'} borderRadius={'5px'} cursor={'pointer'}>
        {isLoggingOut ? <Spinner size="sm" color="white" /> : <Text>Log out</Text>}
      </Center>
    </button>
  )
}

export default LogoutButton