import React,{useState,useEffect, useCallback} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import AddNew from './components/AddNew/AddNew';
import api from './API/index';
import useApp from './components/hooks/useApp';
import Home from './pages/home';
import AddProductPage from './pages/add';
import EditProductPage from './pages/edit';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme';

// @todo postylowac wszystko
// skeszowac funkcje wszedzie gdzie sie da uzywajac useCallback()
// poczytac co to useMemo i poczytac co to 'react context api' https://pl.reactjs.org/docs/context.html

function App() {
  const {title, val, productsCounter, cartValue, handleChangePriceFilter, handleChangeTitleFilter, HandleAddNewSend, products,
    addToCart, removeFromCart, deleteProduct} = useApp(api);
  
  const homeProps = {
    title, val, productsCounter, cartValue, handleChangePriceFilter, handleChangeTitleFilter, HandleAddNewSend, products,
    addToCart, removeFromCart, deleteProduct
  }
  
  return (
    <ThemeProvider theme={theme} >
    <Router>
      <Switch>
        <Route path='/edit/:productId'>
          <EditProductPage />
        </Route>
        <Route path='/add'>
         <AddProductPage AddNewSend={HandleAddNewSend} />
        </Route>
        <Route path='/'>
         <Home { ...homeProps } />
        </Route>
       
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
