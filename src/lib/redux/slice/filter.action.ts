import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  sortOrder: string,
  genreFilter: string,
  platformFilter: string
}

const initialState: FilterState = {
  sortOrder: '',
  genreFilter: '',
  platformFilter: ''
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortOrder: (state, action:PayloadAction<string>) => {
      state.sortOrder = action.payload
    },
    setGenreFilter: (state, action:PayloadAction<string>) => {
      state.genreFilter = action.payload
    },
    setPlatformFilter: (state, action:PayloadAction<string>) => {
      state.platformFilter = action.payload
    },
  },
});

export const {
  setSortOrder,
  setGenreFilter,
  setPlatformFilter
} = filterSlice.actions;
export default filterSlice.reducer