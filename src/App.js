import "./App.css";
import {Navigation} from './components';
import {Routes, Route} from 'react-router-dom';
import {Home, ProductsPage} from './pages';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchProductData} from './store/product-actions';



function App() {
  // let loading = useSelector(state => state.product.loadingProducts);
  const dispatch = useDispatch();

  useEffect(()=> {
   
    dispatch(fetchProductData());
  }, [dispatch])

  return (
    <div className="App">
      <Navigation/>

      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
