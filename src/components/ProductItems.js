import classes from '../pages/Pages.module.css';
// import ProductImage from '../assets/pro-1.jpg';
import {Rating} from '@material-ui/lab';
// import {useState} from 'react';
import {IconButton} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom';

const ProductItems = ({product}) => {
    const {name , price, id, image} = product;
    const formatPrice = (number) => {
        const newNumber = Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(number / 100)
        return newNumber;
    }
   
    // const [value, setValue] = useState(4);
    return (
        <div>
            <div className={classes.productBody}>
                <div className={classes.productImg}>
                    <img src={image} alt='img'/>
                </div>
                <div className={classes.productContent}>
                    <div className={classes.productTitle}>
                       {name}
                    </div>
                    <div className={classes.productPrice}>
                       <div> {formatPrice(price)}</div>
                       <div>
                       <Rating className={classes.rating} name="read-only" value={4} readOnly /> 
                      
                       </div>
                    </div>
                    
                </div>
                <div className={classes.productAction}>
                    <IconButton><ShoppingCartIcon/></IconButton>
                    <Link to={`/products/${id}`}><IconButton><SearchIcon/></IconButton></Link>
                    <IconButton><FavoriteIcon/></IconButton>
                </div>
            </div>
        </div>
    )
}

export default ProductItems
