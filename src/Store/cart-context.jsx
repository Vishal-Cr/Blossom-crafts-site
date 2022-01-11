import React from 'react';


//creating context step no:1;
const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
});
export default CartContext;