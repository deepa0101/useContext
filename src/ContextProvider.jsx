/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { createContext, useState } from "react";
import Products from "./Products";

const Context = createContext();

export const ContextProvider = ({children}) => {
  const [products, setProducts ] =useState([...Products])
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x=> x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map((x) => 
        x.id === product.id ?{...exist, qty: exist.qty+1, subtotal: exist.subtotal+product.price}:x));
    }
    else { setCartItems([...cartItems,{...product,qty: 1,subtotal: product.price}])}
    
  };
  console.log(cartItems)

  const onRemove=(product)=> {
    const exist = cartItems.find((x)=> x.id === product.id)
    if (exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id!== product.id));
    } else {
      setCartItems(
      cartItems.map((x) => 
      x.id === product.id ?{...exist, qty: exist.qty - 1 ,subtotal: exist.subtotal-product.price}:x));
  
    }}


  
  return (
    <Context.Provider
      value={{products,setProducts,cartItems, setCartItems, onAdd, onRemove}}
    >
      {children}
    </Context.Provider>
  )
}
export default Context;
