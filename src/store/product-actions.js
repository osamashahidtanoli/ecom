import { productAction } from "./product-cart";


export const fetchProductData = () => {
  
  return async (dispatch) => {
    const fetchProducts = async () => {
      dispatch(productAction.loading())
       
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
      const featureProducts = productData.filter(p => p.featured === true);
      
    
      // console.log(featureProducts);
      dispatch(productAction.replaceProducts(productData));
      dispatch(productAction.addFeatureProducts(featureProducts));
      dispatch(productAction.notLoading())
    } catch (err) {
      console.log(err);
      dispatch(productAction.notLoading())
    }
  };
};


export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    const fetchSingle = async () => {
      dispatch(productAction.loading())

      const response = await fetch(`https://course-api.com/react-store-single-product?id=${id}`);

      if(!response.ok){
        console.log('ERROR: Could not fetch')
      }

      const data = await response.json();

      return data;
    }
    try{
        const singleData = await fetchSingle();
        dispatch(productAction.fetchSingleProduct(singleData));
        dispatch(productAction.notLoading())
        
    }
    catch(err){
      dispatch(productAction.notLoading());
        console.log(err);
    }
  }
}

