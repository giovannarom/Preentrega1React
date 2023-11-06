import { useState, createContext } from "react";
export const ContextCart = createContext ({cart:[]})

export const CartProvider=({children})=>{

    const [cart, setCart] = useState([])
    console.log(cart)

    const removeItem=(itemId) => {
        const cartUpdated = cart.filter(product => product.id !== itemId)
        setCart(cartUpdated)
    }

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        } else{
            console.error("Product was already added")
        }
    }

    const isInCart = (itemId) => {
        return cart.some((product)=> product.id === itemId )
    }

    const clearCart=()=>{
        setCart([])
    }

    return(
        <ContextCart.Provider value={{cart, removeItem, addItem, clearCart}}>{ children }</ContextCart.Provider>
    )
}