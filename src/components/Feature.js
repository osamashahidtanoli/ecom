import {useSelector} from 'react-redux';
import classes from '../pages/Pages.module.css';
import {Rating} from '@material-ui/lab';
import {IconButton} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom';
const Feature = () => {
    const featureProducts = useSelector(state => state.product.featureProducts);
    // console.log(featureProducts);
    let content;
    const formatPrice = (number) => {
        const newNumber = Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(number / 100)
        return newNumber;
    }

    if(featureProducts && featureProducts.length > 0){
        content = featureProducts.slice(0,4).map((fp) => {
            return (
                <div key={fp.id} className={classes.productBody}>
                <div className={classes.productImg}>
                    <img src={fp.image} alt='img'/>
                </div>
                <div className={classes.productContent}>
                    <div className={classes.productTitle}>
                       {fp.name}
                    </div>
                    <div className={classes.productPrice}>
                       <div> {formatPrice(fp.price)}</div>
                       <div>
                       <Rating className={classes.rating} name="read-only" value={4} readOnly /> 
                      
                       </div>
                    </div>
                    
                </div>
                <div className={classes.productAction}>
                    <IconButton><ShoppingCartIcon/></IconButton>
                    <Link to={`/products/${fp.id}`}><IconButton><SearchIcon/></IconButton></Link>
                    <IconButton><FavoriteIcon/></IconButton>
                </div>
            </div>
            )
        })
    }

    return (
        
        <>
         <h1 className={classes.productHeader}>Feature Products</h1>
          <h5>Browse our Top Collection</h5> 
          <div className={classes.products}>
            {content}
          </div>  
        </>
    )
}

export default Feature
