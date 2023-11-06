import React, { useContext } from "react";
import { ContextCart } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Button from 'react-bootstrap/Button';
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(ContextCart);

    if (totalQuantity === 0) {
        return (
            <div className="container-holder">
                <h2> No items in cart</h2>
                <Link to="/"><Button variant="secondary" size="lg">Search products</Button></Link>
            </div>
        );
    }

    return (
        <div>
            <br></br>
            <h2>Shopping Cart</h2>
            <hr></hr>
            {cart.map(item => <CartItem key={item.id} {...item} removeItem={removeItem} />)}
            <h3> Total: ${total}</h3>
            <Button variant="danger" className="inline-btn" onClick={() => clearCart()}>Clear cart</Button>
            <Link to="/checkout"><Button className="inline-btn" variant="outline-success">Checkout</Button></Link>
        </div>
    );
};

export default Cart;
