import classes from '../pages/Pages.module.css';
import {useState} from 'react';
import {Button} from '@material-ui/core';



const AddToCart = ({product}) => {

    const {colors,stock} = product;
    const [mainColor , setMainColor] = useState();
    const [qty, setQty] = useState(1)
    // console.log(mainColor);

    const increment = () => {
       if(qty < stock){
           setQty(prevState => prevState + 1)
       }
    }

    const decrement = () => {
            if(qty <= 1){
                setQty(1)
            }
            else if(qty <= stock){
                setQty(prevState => prevState - 1)
            }
    }

    return (
        <>
            {colors && colors.length > 0 &&  colors.map((color, index) => <button onClick={() => setMainColor(color)} className={classes.colorButton} style={{backgroundColor: `${color}`}} key={index}> {mainColor === color ? 'c' : ''} </button>)}
            <div className={classes.qtyFlex}>
                <button onClick={increment}>+</button>
                <p>{qty}</p>
                <button onClick={decrement}>-</button>
            </div>
            <Button variant='contained' color='primary'>Add To Cart</Button>
        </>
    )
}

export default AddToCart
