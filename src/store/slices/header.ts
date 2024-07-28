import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type StoreHeaderSliceInitialState = {
  height: number;
  isVisible: boolean;
};

const initialState: StoreHeaderSliceInitialState = {
  height: 0,
  isVisible: true
};

const storeHeaderSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeight: (state, { payload }: PayloadAction<number>) => {
      state.height = payload;
    },
    setIsVisible: (state, { payload }: PayloadAction<boolean>) => {
      state.isVisible = payload;
    }
  }
});

export default storeHeaderSlice;
export const { setHeight, setIsVisible } = storeHeaderSlice.actions;
export type { StoreHeaderSliceInitialState };
