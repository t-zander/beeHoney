import {createSelector} from 'reselect';
import * as actionTypes from '../actions/actionTypes';
import {addProductsToLS} from '../helpers/helpers';


const initialState = {
  products: [],
  productsInCart: [],
  loading: false
};

const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true
      }
      
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    
    case actionTypes.ADD_PRODUCT_TO_CART:
      addProductsToLS(action.payload);
      
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload]
      }

    default:
      return state;
  }
}

export const getProducts = (state) => {
  return state.products;
}

export const getProductsInCart = (state) => {
  return state.productsInCart;
}

export default productsReducer;