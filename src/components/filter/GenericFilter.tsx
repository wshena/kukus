// Komponen Filter Modular (GenericFilter.tsx)
'use client'
import React from 'react'
import { Box, Menu, Portal } from "@chakra-ui/react"
import { IconType } from 'react-icons'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/redux/store'

interface FilterOption {
  name: string;
  value: string;
}

interface GenericFilterProps {
  filterName: string; // Nama filter (misalnya: 'platform', 'genre', dll)
  displayName: string; // Nama yang ditampilkan di UI
  options: FilterOption[]; // Opsi filter
  icon: React.ReactElement; // Icon komponen
  pathname: string; // Pathname dari URL
  reduxActionCreator: (value: string) => any; // Redux action creator
  reduxSelector: (state: RootState) => string; // Redux selector
  paramName: string; // Nama parameter di URL
}

const GenericFilter = ({
  filterName,
  displayName,
  options,
  icon,
  pathname,
  reduxActionCreator,
  reduxSelector,
  paramName
}: GenericFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const currentValue = useAppSelector((state: RootState) => reduxSelector(state));

  const handleFilterChange = (value: string) => {
    // Update state redux
    dispatch(reduxActionCreator(value));

    // Salin query parameter yang sudah ada ke objek URLSearchParams
    const params = new URLSearchParams(searchParams.toString());
    params.set(paramName, value);

    // Redirect ke URL yang sama dengan parameter yang diperbarui
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <button
          className="cursor-pointer"
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
          }}
          onFocus={(e) => {
            e.currentTarget.style.outline = "none";
            e.currentTarget.style.boxShadow = "none";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.outline = "none";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            gap={'10px'}
            paddingY={'.5rem'}
            paddingX={'1rem'}
            color={'white'}
            border={'1px solid white'}
            borderRadius={'5px'}
            _focus={{ outline: 'none', border: 'none', boxShadow: 'none' }}
            _active={{ outline: 'none', border: 'none', boxShadow: 'none' }}
          >
            {icon} {displayName}
          </Box>
        </button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem" bgColor={'black'} border={'1px solid white'}>
            <Menu.RadioItemGroup
              value={currentValue}
              onValueChange={(e) => handleFilterChange(e.value)}
            >
              {options.map((item) => (
                <Menu.RadioItem
                  key={item.value}
                  value={item.value}
                  padding={'.7rem'}
                  color={'white'}
                  cursor={'pointer'}
                  textTransform={'capitalize'}
                  bgColor={item.value === currentValue ? 'gray.700' : 'black'}
                  _hover={{bgColor:'gray.700'}}
                >
                  {item.name}
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default GenericFilter