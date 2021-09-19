const initialState = {
  List: [],
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_LIST": {
      return {
        ...state,
        List: action.payload,
      };
    }
    default:
      return state;
  }
};
export default productListReducer;
