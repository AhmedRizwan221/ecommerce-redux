import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemToCart, clearState, increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";
import './shoppingCart.css';
const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemoveItem = itemId => {
        dispatch(removeItemToCart(itemId));
    }
    const handleClearCart = () => {
        dispatch(clearState());
    }
    const handleIncreaseQunatity = itemId => {
        dispatch(increaseItemQuantity(itemId));
    }
    const handleDecreaseQunatity = itemId => {
        dispatch(decreaseItemQuantity(itemId));
    }

    return (
        <>
            <div className="shopping-cart">
                <h2 className="shopping-cart-title">Shopping Cart</h2>
                <ul className="shopping-cart-items">
                    {cartItems.map(item => (
                        <li key={item.id} className="shopping-cart-item">
                            <span>{item.name} - ${item.price}</span>
                            <div className="qunatity-controls">
                                <button className="qunatity-control-btn-decrease" onClick={() => handleDecreaseQunatity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button className="qunatity-control-btn-increase" onClick={() => handleIncreaseQunatity(item.id)}>+</button>
                            </div>
                            <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
                        </li>
                    ))}
                </ul>
                <button className="shopping-cart-btn" onClick={handleClearCart}>Clear Cart</button>
                <div>{totalAmount ? <div className="totalAmount">The total amount is {totalAmount}</div> : ''}</div>
            </div>
        </>
    )
}
export default ShoppingCart;