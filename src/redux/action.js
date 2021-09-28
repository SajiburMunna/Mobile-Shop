import { auth } from "../config/Config";
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

export const signUpStart = () => ({
  type: "SIGN_UP_START",
});
export const signUpSuccess = (user) => ({
  type: "SIGN_UP_SUCCESS",
  payload: user,
});
export const signUpFail = (error) => ({
  type: "SIGN_UP_FAIL",
  payload: error,
});

export const signUpInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(signUpStart);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(signUpSuccess(user));
      })
      .catch((error) => dispatch(signUpFail(error)));
  };
};
