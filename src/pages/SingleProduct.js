import {Button, Container, Grid} from '@material-ui/core';
import {fetchSingleProduct} from '../store/product-actions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Loading, ProductImages} from '../components';
import classes from './Pages.module.css';
import {Rating} from '@material-ui/lab';


const SingleProduct = () => {
    
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() =>{
            dispatch(fetchSingleProduct(`${params.id}`));
            
    }, [dispatch,params.id])
    const single = useSelector(state => state.product.single);
    const loading = useSelector(state => state.product.loadingProduct);

    if(loading){
        return <Loading/>   
    }

    const {name, images, description,colors, category,stars,reviews,price,stock} = single;

    

    return (
        <Container>
            
                <Grid className={classes.margin20}  spacing={3} container>
                    <Grid  item xs={6}>
                        <ProductImages images={images}/>
                    </Grid>
                    <Grid item xs={6}>
                        <h1>{name}</h1>
                        <div className={classes.proflex}>
                        <div><Rating className={classes.rating} name="read-only" value={stars} readOnly /></div>   <p>{reviews} people reviewed this product</p>
                        </div>

                        <div className={classes.proflex2}>
                            <div>
                                <div className={classes.headS}>Price</div>
                                <div className={classes.valueS}>$ {price}</div>
                            </div>
                            <div>
                                <div className={classes.headS}>Stock</div>
                                <div className={classes.valueS}>{stock}</div>
                            </div>
                        </div>
                      
                        <p>{description}</p>
                        {colors && colors.map(color => <div key={color}><input    type='radio' name='color' value={color} /> <label>{color}</label></div>) }
                        {!colors && <p>No Colors</p> }
                        <div>
                            <div>
                                Category:
                            </div>
                            <div>{category}</div>
                        </div>
                        <div>
                            <input type="number"  min={1} max={stock} />
                            <Button type="button" variant='contained'>Add To Cart</Button>
                        </div>
                    </Grid>
                </Grid>
        </Container>
    )
}

export default SingleProduct
