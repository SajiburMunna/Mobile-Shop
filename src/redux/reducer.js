const initialState = {
  List: [],
  DetailsList: [],
  CartItems: [],
  SearchData: "",
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
      const inCart = state.CartItems.find(
        (item) => item.key === action.payload.key
      );

      return {
        ...state,
        CartItems: inCart
          ? state.CartItems.map((item) =>
              item.key === action.payload.key
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.CartItems, action.payload],
      };
    }
    case "REMOVE_TO_CART": {
      return {
        ...state,
        CartItems: state.CartItems.filter(
          (item) => item.key !== action.payload
        ),
      };
    }

    case "ADD_QUANTITY": {
      return {
        ...state,
        CartItems: state.CartItems.map((product) =>
          product.key === action.payload
            ? { ...product, qty: product.qty + 1 }
            : product
        ),
      };
    }
    case "SUB_QUANTITY": {
      return {
        ...state,
        CartItems: state.CartItems.map((product) =>
          product.key === action.payload
            ? {
                ...product,
                qty: product.qty !== 1 ? product.qty - 1 : 1,
              }
            : product
        ),
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        CartItems: [],
      };
    }

    case "SEARCH_PRODUCT": {
      return {
        ...state,
        SearchData: action.payload,
      };
    }
    default:
      return state;
  }
};
export default productListReducer;
