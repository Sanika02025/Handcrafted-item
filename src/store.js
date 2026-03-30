import { createStore } from "redux";

const initialState = {
  cartItems: [] // Each item will now have a { ...product, quantity: n }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(item => item.name === action.payload.name);
      
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.name === action.payload.name 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          )
        };
      }
      // If new item, add it with quantity 1
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
      };
    }

    case "REMOVE_FROM_CART": {
      const existingItem = state.cartItems.find(item => item.name === action.payload.name);

      if (existingItem.quantity > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.name === action.payload.name 
              ? { ...item, quantity: item.quantity - 1 } 
              : item
          )
        };
      }
      // If quantity is 1, remove the item entirely
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.name !== action.payload.name)
      };
    }

    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;