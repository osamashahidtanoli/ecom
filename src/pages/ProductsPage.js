import { Products, FilterProducts } from "../components";
import { Container } from "@material-ui/core";

const ProductsPage = () => {
  return (
    <>
      <Container>
        <FilterProducts/>
        <Products />
      </Container>
    </>
  );
};

export default ProductsPage;
