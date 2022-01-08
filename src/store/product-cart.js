import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    featureProducts: [],
    loadingProduct: false,
    single: {},
    filterPro: null,
    cart: [],
  },
  reducers: {
    replaceProducts(state, action) {
      const pro = action.payload;
      state.products = pro;
      state.filterPro = state.products;
    },
    fetchSingleProduct(state, action) {
      const single = action.payload;
      state.single = single;
    },
    loading(state) {
      state.loadingProduct = true;
    },
    notLoading(state) {
      state.loadingProduct = false;
    },
    addFeatureProducts(state, action) {
      const featurePro = action.payload;
      state.featureProducts = featurePro;
    },
    filterProducts(state, action) {
      state.loadingProduct = true;
      const filterItems = action.payload;
      const { name, cat } = filterItems;
      let temp_products = [...state.products];
      if (name !== '') {
        // let nameLowerCase = name.toLowerCase();
        temp_products = temp_products.filter((product) =>
          product.name.toLowerCase().startsWith(name)
        );
      }
     if (cat !== "all") {
        temp_products = temp_products.filter(
          (product) => product.category === cat
        );
      }
      if (name === "" && cat === "") {
        temp_products = [...state.products];
      }

      state.filterPro = temp_products;
      state.loadingProduct = false;
    },
    addToCart(state, action) {
      const { id, mainColor, qty, product } = action.payload;
      const existingProduct = state.cart.find((eP) => eP.id === id + mainColor);

      if (existingProduct) {
        existingProduct.qty = existingProduct.qty + qty;
        if (existingProduct.qty > product.stock) {
          existingProduct.qty = product.stock;
        }
      } else {
        const newItem = {
          id: id + mainColor,
          name: product.name,
          color: mainColor,
          qty,
          image: product.images[0].url,
          stock: product.stock,
          price: product.price
        };
        state.cart = [...state.cart, newItem];
      }
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice;
