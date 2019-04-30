import * as actionTypes from "../actionTypes";
import {CHECKOUT_ORDER} from '../../actionTypes/order';
import axios from "axios";
import config from "../../config.json";

export const fetchAll = () => {
  return dispatch => {
    dispatch(fetchStart());
    return axios.get(`${config.serverUrl}products`).then(response => {
      dispatch(fetchSuccess(response.data));
    });
  };
};

// PRODUCT
export const fetchById = (productId) => {
  return dispatch => {
    dispatch(fetchStart());
    return axios
      .get(`${config.serverUrl}products/${productId}`)
      .then(response => {
        dispatch(fetchByIdSuccess(response.data));
      });
  };
};

export const deleteProductById = (productId) => {
  return dispatch => {
    dispatch(deleteProductStart());
    return axios
      .delete(`${config.serverUrl}products/${productId}`)
      .then(() => {
        dispatch(deleteProductSuccess(productId));
      })
      .catch(({ response }) => {
        const { error } = response.data;
        dispatch(deleteProductFailed(error));
      });
  };
};

export const fetchByCategory = (categoryId) => {
  return dispatch => {
    dispatch(fetchStart());
    return axios
      .get(`${config.serverUrl}products/category/${categoryId}`)
      .then(response => {
        dispatch(fetchSuccess(response.data));
      });
  };
};

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START
  };
};

export const deleteProductStart = () => {
  return {
    type: actionTypes.DELETE_PRODUCT_START
  };
};

export const deleteProductSuccess = (productId) => {
  return {
    type: actionTypes.DELETE_PRODUCT_SUCCESS,
    payload: productId
  };
};

export const deleteProductFailed = (error) => {
  return {
    type: actionTypes.DELETE_PRODUCT_FAILED,
    payload: error
  };
};

export const fetchSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: data
  };
};

export const fetchByIdSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: data
  };
};

export const onAddProductToCart = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    payload: product
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: productId
  };
};

export const increaseProductAmt = (productId) => {
  return {
    type: actionTypes.INCREASE_PRODUCT_AMT,
    payload: productId
  };
};

export const decreaseProductAmt = (productId) => {
  return {
    type: actionTypes.DECREASE_PRODUCT_AMT,
    payload: productId
  };
};

// ORDER
export const checkoutOrder = (productsInCart, customerInfo) => {
  return {
    type: CHECKOUT_ORDER,
  };
};

export const addProductAdmin = (product) => {
  const formData = new FormData();
  for (let key in product) {
    if (typeof product[key].name === "string") {
      formData.append(key, product[key], product[key].name);
    } else {
      formData.append(key, product[key]);
    }
  }

  return dispatch => {
    dispatch(fetchStart());
    return axios
      .post(`${config.serverUrl}products`, formData)
      .then(response => {
        dispatch(addProductSuccess(response.data));
      });
  };
};

export const addProductSuccess = product => {
  return {
    type: actionTypes.ADD_PRODUCT_ADMIN_SUCCESS,
    payload: product
  };
};
