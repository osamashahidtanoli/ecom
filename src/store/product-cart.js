import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        featureProducts: [],
        loadingProduct: false,
        single: {}
    },
    reducers: {
            replaceProducts(state,action){
                const pro = action.payload;
                state.products = pro;
            },
            fetchSingleProduct(state, action){
               const single = action.payload;
               state.single = single;
            },
            loading(state){
                state.loadingProduct = true;
            },
            notLoading(state){
                state.loadingProduct = false;
            },
            addFeatureProducts(state, action){
                const featurePro = action.payload;
                state.featureProducts = featurePro;
            }
    }
})

export const productAction = productSlice.actions;
export default productSlice;
