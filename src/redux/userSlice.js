import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveTokenTask(state, action) {
      state.token = action.payload;
    },
    logout: {
      reducer: (state, action) => {
        return initialState;
      },
    },
  },
});

const { actions, reducer } = userSlice;
export const { saveTokenTask, logout } = actions;
export default reducer;
