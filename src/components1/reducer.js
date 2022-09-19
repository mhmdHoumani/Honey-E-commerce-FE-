export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
      return {
        ...state,
        item: state.item.filter((curElem) => {
          return curElem._id !== action.payload;
        }),
      };
    }
  
    if (action.type === "CLEAR_CART") {
      return { ...state, item: [] };
    }
  
    if (action.type === "INCREMENT") {
      const updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });
  
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "DECREMENT") {
      const updatedCart = state.item
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity - 1 };
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity !== 0);
      return { ...state, item: updatedCart };
    }
  // Add here the total price 
    if (action.type === "GET_TOTAL") {
      let updatedTotalAmount = 0 ;
      let { totalItem, totalAmount } = state.item.reduce(
        (accum, curVal) => {
          let { total_price, quantity } = curVal;
  
          updatedTotalAmount += total_price ;
          accum.totalAmount = updatedTotalAmount;
  
          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    }
    return state;
  };
  