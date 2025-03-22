import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UtilityState {
  count: number
}

const initialState: UtilityState = {
  count: 0  
};

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setCount: (state, action:PayloadAction<number>) => {
      state.count = action.payload
    }
  },
});

export const {
  setCount
} = utilitySlice.actions;
export default utilitySlice.reducer