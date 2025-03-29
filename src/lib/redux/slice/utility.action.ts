import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UtilityState {
  isMobileNavMenuClick: boolean,
  isShowOffScreenDiv: {
    status: boolean,
    type: string,
  }
}

const initialState: UtilityState = {
  isMobileNavMenuClick: false,
  isShowOffScreenDiv: {
    status: false,
    type: ''
  }
};

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setMobileNavMenu: (state, action:PayloadAction<boolean>) => {
      state.isMobileNavMenuClick = action.payload
    },
    setOffScreenDiv: (state, action:PayloadAction<{status:boolean, type:string}>) => {
      const { status, type } = action.payload;
      state.isShowOffScreenDiv = { status, type };
    }
  },
});

export const {
  setMobileNavMenu,
  setOffScreenDiv
} = utilitySlice.actions;
export default utilitySlice.reducer