import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SuperCoin = () => {
    const [superCoin, setSuperCoin] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        if(totalAmount >= 300) {
            setSuperCoin(30);
        }else if (totalAmount >= 200) {
            setSuperCoin(20);
        }else if(totalAmount >= 100) {
            setSuperCoin(10);
        }else {
            setSuperCoin(0);
        }
    }, [totalAmount]);
    return(
        <>
            <div className="super-coin">
                <h2>Super Coin Value is {superCoin}</h2>
            </div>
        </>
    )
}
export default SuperCoin;