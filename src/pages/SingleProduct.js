import { Container, Grid } from '@material-ui/core';
import { fetchSingleProduct } from '../store/product-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, AddToCart, ProductImages } from '../components';
import classes from './Pages.module.css';
import { Rating } from '@material-ui/lab';
// import React, { Suspense } from 'react';
// const ProductImages = React.lazy(() =>  import('../components/ProductImages'));


const SingleProduct = () => {

    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        dispatch(fetchSingleProduct(`${params.id}`));

    }, [dispatch, params.id])
    const single = useSelector(state => state.product.single);
    const loading = useSelector(state => state.product.loadingProduct);

    if (loading) {
        return <Loading />
    }

    const { name, images, description,  stars, reviews, price, stock } = single;
    const formatPrice = (number) => {
            const newNumber = Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(number / 100)
            return newNumber
    }



    return (

        <Container>

            <Grid className={classes.margin20} spacing={3} container>
                <Grid item xs={6}>

                    <ProductImages images={images} />



                </Grid>
                <Grid item xs={6}>
                    <h1 className={classes.proHeading}>{name}</h1>
                    <div className={classes.proflex}>
                        <div><Rating className={classes.rating} name="read-only" value={stars} readOnly /></div>   <p>{reviews} people reviewed this product</p>
                    </div>

                    <div className={classes.proflex2}>
                        <div>
                            <div className={classes.headS}>Price</div>
                            <div className={classes.valueS}>{formatPrice(price)}</div>
                        </div>
                        <div>
                            <div className={classes.headS}>Stock</div>
                            <div style={{textAlign: 'center'}} className={classes.valueS}>{stock}</div>
                        </div>
                    </div>

                    <p className={classes.desc}>{description}</p>

                    <AddToCart product={single} />

                </Grid>
            </Grid>
        </Container>

    )
}

export default SingleProduct
