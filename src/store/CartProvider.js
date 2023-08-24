import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = [...state.items, action.item];
    return {
      items: updatedItems,
    };
  } else if (action.type === 'REMOVE') {
    const removedItems = state.items.filter((item) => item.id !== action.id);
    return {
      id: removedItems,
    };
  }
  return defaultState;
};

const CartProcider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const cartContext = {
    items: cartState.items, //장바구니 항목 배열
    addItmes: (item) => {
      dispatchCartAction({
        type: 'ADD',
        item: item,
      });
    },
    removeItem: (id) => {
      dispatchCartAction({
        type: 'REMOVE',
        id: id,
      });
    },
  };
  // PRovider의 value는 실제로 관리할 데이터 객체
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProcider;
