import { createContext, useContext, useEffect, useReducer } from 'react';

import { data } from '../data';

import { reducer } from '../reducer/reducer';

export const ACTION_STATE = {
  CLEAR_CART: 'CLEAR_CART',
  REMOVE: 'REMOVE',
  INCREASE_COUNT: 'INCREASE_COUNT',
  DECREASE_COUNT: 'DECREASE_COUNT',
  GET_TOTALS: 'GET_TOTALS',
};

const AppContext = createContext();

const initialState = {
  cart: data,
  total: 0,
  count: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: ACTION_STATE.CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: ACTION_STATE.REMOVE, payload: id });
  };

  const increase = (id) => {
    dispatch({ type: ACTION_STATE.INCREASE_COUNT, payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: ACTION_STATE.DECREASE_COUNT, payload: id });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
