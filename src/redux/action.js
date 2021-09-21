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
