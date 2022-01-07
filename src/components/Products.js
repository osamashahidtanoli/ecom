import classes from '../pages/Pages.module.css';
import { ProductItems, Loading } from './';
import { useSelector } from 'react-redux';
import {useState, useEffect} from 'react';
import {fetchProductData} from '../store/product-actions';
import { useDispatch } from 'react-redux';


const Products = () => {
    const products = useSelector(state => state.product.products);
    const filterProducts = useSelector(state => state.product.filterPro);
    const loading = useSelector(state => state.product.loadingProduct);
    const dispatch = useDispatch();
    let sortedProducts = [];
    const [sortP, setSortP ] = useState('lowest');
    const sortProducts = (event) =>{
        setSortP(event.target.value);
        console.log(sortP)
    }

    if(filterProducts && filterProducts.length > 0){
       sortedProducts = [...filterProducts];
    }
    
    

    // useEffect(()=> {
   
    //     dispatch(fetchProductData());
    //   }, [dispatch, filterProducts])


    if(products && sortP === 'lowest'){
       sortedProducts = sortedProducts.sort((a,b) => a.price - b.price)
    }
    
    if(products && sortP === 'highest'){
        sortedProducts = sortedProducts.sort((a,b) => b.price - a.price)
     }
     if(products && sortP === 'a-z'){
        sortedProducts = sortedProducts.sort((a,b) => a.name.localeCompare(b.name))
     }
     if(products && sortP === 'z-a'){
        sortedProducts = sortedProducts.sort((a,b) => b.name.localeCompare(a.name))
     }

    return (
        <>
            <h1 className={classes.productHeader}>Our Top Collection</h1>
            <h5>Browse our Top Collection</h5>
            <select name="sort" id="sort" onChange={sortProducts}>
                <option value="lowest">price (lowest)</option>
                <option value="highest">price (highest)</option>
                <option value="a-z">a-z </option>
                <option value="z-a">z - a </option>
            </select>
            <div className={classes.products}>
            {loading && <Loading/>}
            {!loading && sortedProducts.length > 0 && sortedProducts.map((product) => (
                <ProductItems key={product.id} product={product}/>
            ))}
            {!loading && sortedProducts.length === 0 && <h1>No Products found</h1>}
            </div>
        </>
    )
}

export default Products
