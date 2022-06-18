import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const authentication: string = "aW5ub21hLjIyOmlubm9tYS4yMg==";

export interface IUserState {
  account: {
    id: number;
    name: string;
    age: number;
    createdItems: number;
    createSingleItem: boolean;
    createMultipleItems: boolean;
    isAuthenticated: boolean;
  };
}

const initialState: IUserState = {
  account: {
    id: 1,
    name: "Babken",
    age: 36,
    createdItems: 0,
    createSingleItem: false,
    createMultipleItems: false,
    isAuthenticated: false || !!localStorage.getItem("authorized"),
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createSingleItem: (state, action: PayloadAction<boolean>) => {
      state.account.createSingleItem = action.payload;
    },
    createMultipleItems: (state, action: PayloadAction<boolean>) => {
      state.account.createMultipleItems = action.payload;
    },
    authenticate: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const { password, email } = action.payload;
      if (authentication === btoa(`${email}:${password}`)) {
        state.account.isAuthenticated = true;
      }
    },
  },
});

export const { createSingleItem, createMultipleItems, authenticate } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.account;
export const selectIsAuthenticated = (state: RootState) => state.user.account.isAuthenticated;

export default userSlice.reducer;
