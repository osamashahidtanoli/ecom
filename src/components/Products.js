import classes from '../pages/Pages.module.css';
import { ProductItems } from './';
import { useSelector } from 'react-redux';
import {useState, useEffect} from 'react';
import {fetchProductData} from '../store/product-actions';
import { useDispatch } from 'react-redux';


const Products = () => {
    const products = useSelector(state => state.product.products);
    const filterProducts = useSelector(state => state.product.filterPro);
    const dispatch = useDispatch();
    let sortedProducts = [...products];
    const [sortP, setSortP ] = useState('lowest');
    const sortProducts = (event) =>{
        setSortP(event.target.value);
        console.log(sortP)
    }

    if(filterProducts && filterProducts.length > 0){
        sortedProducts = [...filterProducts];
    }
    else{
        sortedProducts = [...products]
    }

    useEffect(()=> {
   
        dispatch(fetchProductData());
      }, [dispatch, sortP])


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
            {products.length > 0 && sortedProducts.map((product) => (
                <ProductItems key={product.id} product={product}/>
            ))}
            </div>
        </>
    )
}

export default Products
