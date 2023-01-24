import { Route, Switch, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
      {/* 
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route path="/products" exact>
            <Products />
          </Route>

          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch> */}

        <Routes>
          <Route path="/welcome" element={ <Welcome />} />
          {/* <Route path="/products" element={ <Products />} /> */}
          <Route path="/products/*" element={ <Products />} />
          <Route path="/products/:productId" element={ <ProductDetail /> } />
        </Routes>

      </main>
    </div>
  );
}

export default App;
  
// npm i -D react-router-dom@latest
// npm install react-router-dom@6