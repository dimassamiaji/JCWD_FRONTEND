import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: 0,
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    functionLogin: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    functionLogout: (state) => {
      return initialState;
    },
  },
});

export const { functionLogin, functionLogout } = userSlice.actions;
export default userSlice.reducer;
