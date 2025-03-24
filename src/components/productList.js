import React, { useState } from "react";
import './productList.css';
import { useDispatch } from "react-redux";
import { addItemToCart } from "./cartSlice";

const ProductLists = () => {
    const [disableProducts, setDisableProducts] = useState([]);
    const dispatch = useDispatch();


    const products = [
        { id: 1, name: "Product A", price: 60 },
        { id: 2, name: "Product B", price: 40 },
        { id: 3, name: "Product C", price: 90 },
    ]

    const handleAddTocart = product => {
        dispatch(addItemToCart(product));
        setDisableProducts([...disableProducts, product.id]);
    }

    return (
        <div className="product-list">
            <h2 className="product-list-title">Products</h2>
            <ul className="product-list-items">
                {products.map((product) => (
                    <li key={product.id} className="product-list-item">
                        <span>{product.name} - ${product.price}</span>
                        <button className="add-to-cart-btn" onClick={() => handleAddTocart(product)} >
                            Add to cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductLists;