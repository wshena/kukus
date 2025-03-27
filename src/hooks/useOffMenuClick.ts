'use client'
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/redux/store";

export function useOffMenuClick() {
  const { isMobileNavMenuClick } = useAppSelector(
    (state: RootState) => state.utility
  );
  return isMobileNavMenuClick;
}
