import {Container, Grid} from '@material-ui/core';
import {fetchSingleProduct} from '../store/product-actions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Loading, ProductImages} from '../components';
import classes from './Pages.module.css';


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

    const {name, images} = single;

    

    return (
        <Container>
            
                <Grid className={classes.margin20}  spacing={3} container>
                    <Grid  item xs={6}>
                        <ProductImages images={images}/>
                    </Grid>
                    <Grid item xs={6}>
                        <h1>{name}</h1>
                    </Grid>
                </Grid>
        </Container>
    )
}

export default SingleProduct
