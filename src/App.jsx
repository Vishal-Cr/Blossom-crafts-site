import React,{useState} from 'react';
import Cart from './Cart/Cart'
import './App.css'
import Header from './Layout/Header'
import Items from './Items/Items'
import CartProvider from './Store/CartProvider';

function App() {
 const[cartisShown,setCartIsShown]=useState(false);
 
 const showCartHandler=()=>{
   setCartIsShown(true);
 }
 const hideCartHandler=()=>{
   setCartIsShown(false);
 }

  return (
    <CartProvider>
      {cartisShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
       <Items/>
      </main>
    </CartProvider>
  )
}

export default App
