import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Products from './Products/Products';
import Cart from "./cart/cart";
import AddProduct from './AddProduct/AddProduct';
import AppContextProvider from './store/App-context-provider';

function App() {

  return (
    <AppContextProvider>
      <Header/>
      <Products />
      <Cart/>
      <AddProduct />
    </AppContextProvider>
  );
} 

export default App;
