import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IProduct {
  name: string;
  price: string;
  weight: string;
  startDate: Date | null | string | undefined;
  endDate: Date | null | string | undefined;
}
export interface IProductState {
  products: IProduct[];
}

const initialState: IProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
      console.log(current(state.products));
    },
  },
});

export const { addProduct } = productSlice.actions;

export const selectProducts = (state: RootState) => state.product;

export default productSlice.reducer;
