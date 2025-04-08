'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Heading, Box, Field, Input, Text, Flex, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/lib/hooks'
import { FloatingStyles } from '@/constants'
import { login } from '@/utils/actions/auth.action'
import { setAlert } from '@/lib/redux/slice/alert.action'

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleShowPass = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPass(!showPass);
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    // Validasi format email menggunakan regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Format email tidak valid.');
      setIsLoading(false);
      return;
    }

    // Validasi password (minimal 6 karakter)
    if (password.length < 6) {
      setErrorMsg('Password minimal harus 6 karakter.');
      setIsLoading(false);
      return;
    }

    try {
      const process = await login(email, password);
      
      if (process?.success === false) {
        dispatch(setAlert({
          label: process?.message || 'Login gagal, silakan coba lagi.',
          type: 'error',
        }));
      } else if (process?.success === true) {
        console.log("Login success");
        console.log("Cookies after login:", document.cookie);
        window.location.href = '/';
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!errorMsg) return;
  
    const timer = setTimeout(() => {
      setErrorMsg('');
    }, 3000);
  
    return () => clearTimeout(timer);
  }, [errorMsg]);

  return (
    <>
      <Heading as={'h1'} fontSize={{ base: '1.3rem', md: '1.5rem', lg: '2rem' }}>
        Log In
      </Heading>
      <form onSubmit={handleLogin} className='w-full flex flex-col gap-[20px]'>
        {/* error message */}
        {errorMsg !== '' && (
          <Box bg="red.500" padding="0.5rem" borderRadius="md">
            <Text color="white">{errorMsg}</Text>
          </Box>
        )}
        {/* Email */}
        <Field.Root fontSize={'1rem'} width={'100%'}>
          <Box pos="relative" w="full" borderBottom={'1px solid rgb(255, 100, 10)'}>
            <Input
              required
              type='email'
              name='email'
              id='email'
              className="peer"
              placeholder=""
              value={email}
              borderRadius={'0px'}
              border={'none'}
              _focus={{outline:'none'}}
              paddingLeft={'10px'}
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
            />
            <Field.Label css={FloatingStyles}>Email Address</Field.Label>
          </Box>
        </Field.Root>
        {/* Password */}
        <Field.Root fontSize={'1rem'}>
          <Flex alignItems={'center'} gap={'10px'} w={'100%'}>
            <Box pos="relative" width={'100%'} borderBottom={'1px solid rgb(255, 100, 10)'}>
              <Input
                required
                type={showPass ? 'text' : 'password'}
                name='password'
                id='password'
                className="peer w-full"
                placeholder=""
                value={password}
                border={'none'}
                _focus={{outline:'none'}}
                paddingLeft={'10px'}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Field.Label css={FloatingStyles}>Password</Field.Label>
            </Box>
            <button onClick={handleShowPass}>
              <Text cursor={'pointer'} textTransform={'uppercase'} fontSize={'.7rem'} color={'gray.500'} _hover={{ color: 'white' }}>
                {showPass ? 'HIDDEN' : 'SHOW'}
              </Text>
            </button>
          </Flex>
        </Field.Root>

        <button type='submit'>
          <Box
            width={'100%'}
            cursor={'pointer'}
            paddingX={'1rem'}
            paddingY={'.5rem'}
            borderRadius={'10px'}
            bgColor={'rgb(255, 100, 10)'}
            color={'black'}
          >
            {isLoading ? 
              <Spinner size="sm" color="black" /> : 
              <Text textTransform={'uppercase'} fontWeight={'bold'}>Login</Text>}
          </Box>
        </button>
      </form>
      <Flex flexDirection={{base:'column', md:'row'}} alignItems={'center'} justifyContent={'center'} gap={'10px'} width={'100%'}>
        <Text>Don't have an account?</Text>
        <Link href={'/signin'}>
          <Text textTransform={'uppercase'} color={'rgb(255, 100, 10)'} _hover={{ color: 'white' }}>
            Create Account
          </Text>
        </Link>
      </Flex>
    </>
  )
}

export default Page