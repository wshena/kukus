'use client'
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/redux/store";

export function useShowOffScreenDiv() {
  const { isShowOffScreenDiv } = useAppSelector(
    (state: RootState) => state.utility
  );
  return isShowOffScreenDiv;
}
