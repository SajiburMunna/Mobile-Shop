export const productList = (productList) => {
  return {
    type: "PRODUCT_LIST",
    payload: productList,
  };
};
export const detailsList = (detailsList) => {
  return {
    type: "DETAILS_LIST",
    payload: detailsList,
  };
};

export const addToCart = (addtocart) => {
  return {
    type: "ADD_TO_CART",
    payload: addtocart,
  };
};

export const removeToCart = (removetocart) => {
  return {
    type: "REMOVE_TO_CART",
    payload: removetocart,
  };
};
export const addQuantity = (key) => {
  return {
    type: "ADD_QUANTITY",
    payload: key,
  };
};
export const subQuantity = (key) => {
  return {
    type: "SUB_QUANTITY",
    payload: key,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const searchProduct = (value) => {
  return {
    type: "SEARCH_PRODUCT",
    payload: value,
  };
};
