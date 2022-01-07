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
                state.filterPro = state.products
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
                const filterItems = action.payload;
                const {name , cat} = filterItems;
                let temp_products = [...state.products]
                if(name){
                    const nameLowerCase = name.toLowerCase();
                    temp_products = temp_products.filter(product => product.name.toLowerCase().startsWith(nameLowerCase));
                }
                if(cat !== 'all'){
                    temp_products = temp_products.filter(product => product.category === cat)
                }
                if(name === '' && cat === ''){
                    temp_products =  [...state.products]
                }
                
                state.filterPro = temp_products

            }
    }
})

export const productAction = productSlice.actions;
export default productSlice;
