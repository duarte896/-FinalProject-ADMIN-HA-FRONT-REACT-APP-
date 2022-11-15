import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    saveTokenTask(state, action) {
      state.user = action.payload;
    },
    saveUserInfoTask(state, action) {
      state = action.payload;
    },
    logout: {
      reducer: (state, action) => {
        state.token = null;
      },
    },
  },
});

const { actions, reducer } = userSlice;
export const { saveTokenTask, saveUserInfoTask, logout } = actions;
export default reducer;
