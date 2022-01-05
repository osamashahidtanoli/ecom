import classes from '../pages/Pages.module.css';
import { Select, MenuItem, TextField, Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { productAction } from '../store/product-cart';

const FilterProducts = () => {
    const products = useSelector(state => state.product.products);
    const [filterData, setFilterData] = useState({
        name: '',
        cat: '',
        price: '',
        color: ''
    })

    const {cat, name} = filterData

   
    const dispatch = useDispatch();
    const uniqueValueHandler = (data, type) => {
        let unique = data.map(item => item[type])
        if(type === 'colors'){
          unique = unique.flat()
        }
        return ['all', ...new Set(unique)];
    }

    const categories = uniqueValueHandler(products, 'category');
    const colors = uniqueValueHandler(products, 'colors');

    const onChange = (e) => {
        setFilterData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    useEffect(() => {
        dispatch(productAction.filterProducts(filterData));
    }, [dispatch, filterData]);
    return (
        <div className={classes.filterDiv}>
            <div className={classes.catGrid}>
                <div>
                    <TextField name='name' value={name} onChange={onChange} fullWidth label='Name of Product' variant='outlined' type='text' />
                </div>
                <div>
                      <Select
                    fullWidth
                        variant='outlined'
                        name='cat'
                        id='cat'
                        value={cat}
                        onChange={onChange}
                    >
                        {categories.map((c, index)=> <MenuItem value={c} key={index}>{c}</MenuItem> )}
                        
                                           </Select>
                   
                </div>
                <div>
                    <TextField fullWidth variant='outlined' label='Price'></TextField>
                </div>
                <div style={{alignSelf: 'center'}}>
                    <Button fullWidth color='primary' variant='contained'>Clear Filters</Button>
                </div>
            </div>
        </div>
    )
}


export default FilterProducts
