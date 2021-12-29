import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loadingProduct: false,
    },
    reducers: {
            replaceProducts(state,action){
                const pro = action.payload;
                state.products = pro;
            }
    }
})

export const productAction = productSlice.actions;
export default productSlice;
