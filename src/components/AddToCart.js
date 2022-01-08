import classes from "../pages/Pages.module.css";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { productAction } from "../store/product-cart";
import {Link} from 'react-router-dom';

const AddToCart = ({ product }) => {
  const { colors, stock, id } = product;
  const [mainColor, setMainColor] = useState();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  // console.log(mainColor);

  const increment = () => {
    if (qty < stock) {
      setQty((prevState) => prevState + 1);
    }
  };

  const decrement = () => {
    if (qty <= 1) {
      setQty(1);
    } else if (qty <= stock) {
      setQty((prevState) => prevState - 1);
    }
  };

  const addToCartHandler = () => {
    dispatch(
      productAction.addToCart({
        id,
        mainColor,
        qty,
        product,
      })
    );
  };

  return (
    <>
      {colors &&
        colors.length > 0 &&
        colors.map((color, index) => (
          <button
            onClick={() => setMainColor(color)}
            className={classes.colorButton}
            style={{ backgroundColor: `${color}` }}
            key={index}
          >
            {" "}
            {mainColor === color ? "c" : ""}{" "}
          </button>
        ))}

      {stock !== 0 && (
        <div className={classes.qtyFlex}>
          <button onClick={increment}>+</button>
          <p>{qty}</p>
          <button onClick={decrement}>-</button>
        </div>
      )}

      {stock !== 0 && (
        <Link to='/cart'>
          <Button
            onClick={addToCartHandler}
            variant="contained"
            color="primary"
          >
            Add To Cart
          </Button>
        </Link>
      )}
    </>
  );
};

export default AddToCart;
