import "./App.css";
import {Navigation} from './components';
import {Routes, Route} from 'react-router-dom';
import {Cart, Home, ProductsPage,SingleProduct} from './pages';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductData} from './store/product-actions';



function App() {
  const loading = useSelector(state => state.product.loadingProducts);
  const dispatch = useDispatch();

  useEffect(()=> {
   
    dispatch(fetchProductData());
  }, [dispatch])

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <Navigation/>

      <main>
        <Routes>
          <Route path='/' element={<Home loading={loading}/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/products/:id' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
