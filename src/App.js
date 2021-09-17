import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Product';

function App() {
  return (
    <div>
      <Route path='/welcome' >
          <Welcome />
      </Route>
      <Route path='/products' >
          <Products />
      </Route>
    </div>
  );
}

export default App;
