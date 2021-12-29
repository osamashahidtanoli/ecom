import classes from '../pages/Pages.module.css';
import { ProductItems } from './';
import { useSelector } from 'react-redux';

const Products = () => {
    const products = useSelector(state => state.product.products);
    return (
        <>
            <h1 className={classes.productHeader}>Our Top Collection</h1>
            <h5>Browse our Top Collection</h5>
            <div className={classes.products}>
            {products.length > 0 && products.map((product) => (
                <ProductItems key={product.id} product={product}/>
            ))}
            </div>
        </>
    )
}

export default Products
