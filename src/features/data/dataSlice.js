import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dataService from './dataService';

const initialState = {
  chars: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  msg: '',
};

export const getCharacters = createAsyncThunk(
  'chars/getAll',
  async (_, thunkAPI) => {
    try {
      return await dataService.getCharacters();
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSingleCharacter = createAsyncThunk(
  'chars/getOne',
  async (charId, thunkAPI) => {
    try {
      return await dataService.getSingleCharacter(charId);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const charsSlice = createSlice({
  name: 'chars',
  initialState: initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.chars = action.payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.msg = action.payload;
      });
  },
});

export const { reset } = charsSlice.actions;
export default charsSlice.reducer;
