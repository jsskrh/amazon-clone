export const initialState = {
  cart: [],
  user: null,
};

// SELECTOR
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price * item.quantity + amount, 0);

export const getCartQuantity = (cart) =>
  cart?.reduce((quantity, item) => item.quantity + quantity, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      const exists = state.cart.some((item) => item.id === action.item.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
      }

    case "removeFromCart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };

    case "emptyCart":
      return {
        ...state,
        cart: [],
      };

    case "changeItemQuantity":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? { ...item, quantity: action.newQuantity }
            : item
        ),
      };

    case "setUser":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
