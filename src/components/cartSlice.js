import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: [],
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItemToCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        clearState(state) {
            state.cartItems = [];
        },
        increaseItemQuantity(state, action) {
            const toIncreaseItem = state.cartItems.find((item) => item.id === action.payload);

            if (toIncreaseItem) {
                toIncreaseItem.quantity += 1;
            }
        },
        decreaseItemQuantity(state, action) {
            const toDecreaseItem = state.cartItems.find((item) => item.id === action.payload);

            if (toDecreaseItem && toDecreaseItem.quantity > 1) {
                toDecreaseItem.quantity -= 1;
            }
        }
    }
});
export const {
    addItemToCart,
    removeItemToCart,
    clearState,
    increaseItemQuantity,
    decreaseItemQuantity
} = CartSlice.actions;
export default CartSlice.reducer;