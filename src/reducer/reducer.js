import { ACTION_STATE } from '../context/context';

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_STATE.CLEAR_CART:
      return { ...state, cart: [] };
    case ACTION_STATE.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case ACTION_STATE.INCREASE_COUNT: {
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    }
    case ACTION_STATE.DECREASE_COUNT: {
      let tempCart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        })
        .filter((item) => item.count !== 0);

      return { ...state, cart: tempCart };
    }
    case ACTION_STATE.GET_TOTALS: {
      let { total, count } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, count } = cartItem;
          const itemTotal = price * count;
          cartTotal.total += itemTotal;
          cartTotal.count += count;
          return cartTotal;
        },
        {
          total: 0,
          count: 0,
        }
      );
      total = parseFloat(total.toFixed(2));

      return { ...state, total, count };
    }

    default:
      return state;
  }
};
