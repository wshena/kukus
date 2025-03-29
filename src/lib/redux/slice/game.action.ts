import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  description: string,
  name: string
}

const initialState: GameState = {
  description: '',
  name: ''
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameDescription: (state, action:PayloadAction<string>) => {
      state.description = action.payload
    },
    setGameName: (state, action:PayloadAction<string>) => {
      state.name = action.payload;
    }
  },
});

export const {
  setGameDescription,
  setGameName
} = gameSlice.actions;
export default gameSlice.reducer