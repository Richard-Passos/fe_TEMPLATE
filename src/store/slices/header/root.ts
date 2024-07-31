import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type HeaderSliceInitialState = {
  height: number;
  isVisible: boolean;
};

const initialState: HeaderSliceInitialState = {
  height: 0,
  isVisible: true
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeight: (
      state,
      { payload }: PayloadAction<HeaderSliceInitialState['height']>
    ) => {
      state.height = payload;
    },
    setIsVisible: (
      state,
      { payload }: PayloadAction<HeaderSliceInitialState['isVisible']>
    ) => {
      state.isVisible = payload;
    }
  }
});

export default headerSlice;
export const { setHeight, setIsVisible } = headerSlice.actions;
export type { HeaderSliceInitialState };
