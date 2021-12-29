import { productAction } from "./product-cart";


export const fetchProductData = () => {
  
  return async (dispatch) => {
    const fetchProducts = async () => {
       
      const response = await fetch(
        "https://course-api.com/react-store-products"
      );
      if (!response.ok) {
        console.log("Fetching products failed");
      }
      const data = await response.json();
      return data;
      
    };

    try {
      const productData = await fetchProducts();
      const featureProducts = productData.filter(p => p.featured === true ? p.featured : false);
      console.log(featureProducts);
      dispatch(productAction.replaceProducts(productData));
    } catch (err) {
      console.log(err);
    }
  };
};
