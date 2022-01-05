import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        featureProducts: [],
        loadingProduct: false,
        single: {},
        filterPro: null
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
            },
            filterProducts(state, action){
                const catPro = action.payload.cat;
                state.filterPro = state.products.filter(product => product.category === catPro)

            }
    }
})

export const productAction = productSlice.actions;
export default productSlice;
