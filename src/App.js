import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Product';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Route path='/welcome' >
          <Welcome />
        </Route>
        <Route path='/products' >
          <Products />
        </Route>
        {/* Adding dynamic paths */}
        <Route path='/product-detail/:productId'>
          <ProductDetail />
        </Route>
      </main>
      
    </div>
  );
}

export default App;
