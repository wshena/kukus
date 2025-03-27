import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UtilityState {
  isMobileNavMenuClick: boolean
}

const initialState: UtilityState = {
  isMobileNavMenuClick: false
};

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setMobileNavMenu: (state, action:PayloadAction<boolean>) => {
      state.isMobileNavMenuClick = action.payload
    }
  },
});

export const {
  setMobileNavMenu
} = utilitySlice.actions;
export default utilitySlice.reducer