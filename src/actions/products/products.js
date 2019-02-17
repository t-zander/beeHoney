import * as actionTypes from "../actionTypes";
import axios from "axios";
import config from "../../config.json";

export const fetchAll = () => {
  return dispatch => {
    dispatch(fetchStart());
    return axios.get(`${config.serverUrl}products`)
      .then(response => {
        dispatch(fetchSuccess(response.data));
      });
  };
};

export const fetchById = (productId) => {
  return dispatch => {
    dispatch(fetchStart());
    return axios.get(`${config.serverUrl}products/${productId}`)
      .then(response => {
        dispatch(fetchByIdSuccess(response.data));
      });
  };
}

export const fetchByCategory = categoryId => {
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

export const fetchSuccess = data => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: data
  };
};

export const fetchByIdSuccess = data => {
  return {
    type: actionTypes.FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: data
  };
}

export const onAddProductToCart = product => {
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
}