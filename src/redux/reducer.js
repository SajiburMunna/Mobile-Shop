const initialState = {
  List: [],
  DetailsList: [],
  CartItems: [],
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_LIST": {
      return {
        ...state,
        List: action.payload,
      };
    }

    case "DETAILS_LIST": {
      return {
        ...state,
        DetailsList: action.payload,
      };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        CartItems: [...state.CartItems, action.payload],
      };
    }
    default:
      return state;
  }
};
export default productListReducer;
