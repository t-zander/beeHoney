import {createSelector} from 'reselect';
import * as actionTypes from '../actions/actionTypes';
import {addProductsToLS} from '../helpers/helpers';


const initialState = {
  selectedProduct: null,
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
    
    case actionTypes.FETCH_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        selectedProduct: action.payload
      }

    case actionTypes.ADD_PRODUCT_TO_CART:
      addProductsToLS(action.payload);
      const {_id} = action.payload;
      const amount = state.productsInCart.filter(product => product._id === _id).length;
      const productWithAmount = {
        ...action.payload,
        amount: amount + 1
      };

      if(amount){
        const productsInCart = [...state.productsInCart];
        const product = productsInCart.find(product => product._id === _id);
        product.amount += 1;
        return {
          ...state,
          productsInCart: productsInCart
        }
      }else{
        return {
          ...state,
          productsInCart: [
            ...state.productsInCart, 
            productWithAmount
          ]
        }
      }
      
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        productsInCart: state.productsInCart.filter(product => product._id !== action.payload)
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