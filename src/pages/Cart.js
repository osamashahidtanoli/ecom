import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import {Link, useNavigate} from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.product.cart);
  let content;
  if (cart.length < 1) {
    content = <p>No Item Added</p>;
  }
  if (cart.length > 0) {
    content = cart.map((item) => {
     return content = (
        <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell component="th" scope="row">
            <div >
              <img style={{width: '80px', height: '60px', borderRadius: '10px'}} src={item.image} alt="" />
            </div>
             <div onClick={() => navigate(-1)}>{item.name}</div>
          </TableCell>
          <TableCell> {item.price} </TableCell>
          <TableCell>{item.qty}</TableCell>
          <TableCell>{item.price}</TableCell>
          <TableCell><button>Remove</button></TableCell>
        </TableRow>
      );
    });
  }
  return (
    <Container>
      <TableContainer className="margin-20">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Subtotal</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Cart;
