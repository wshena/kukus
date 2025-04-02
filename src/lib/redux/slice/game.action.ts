import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  description: string,
  name: string,
  gameScreenshots: GameScreenshotProps;
}

const initialState: GameState = {
  description: '',
  name: '',
  gameScreenshots: {
    id: 0,
    image: '',
    width: 0,
    height: 0,
    is_deleted: false
  }
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
    },
    setGameScreenshots: (state, action:PayloadAction<GameScreenshotProps>) => {
      state.gameScreenshots = action.payload;
    },
  },
});

export const {
  setGameDescription,
  setGameName,
  setGameScreenshots
} = gameSlice.actions;
export default gameSlice.reducer