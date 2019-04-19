import * as actionTypes from '../actions/actionTypes';
import {addProductsToLS} from '../helpers/helpers';


const initialState = {
  selectedProduct: null,
  products: [],
  productsInCart: [
    {
      _id: 1231,
      price: 100,
      name: "Мед подсолнечный",
      description: "очень вкусный",
      imageUrl: "http://localhost:8000/images/honey-product.jpg",
      categoryId: "5c1e4ef9f8a84d0a5438c0be",
      amount: 1
    },
    {
      _id: 1235,
      price: 200,
      name: "Мед майский",
      description: "очень вкусный",
      imageUrl: "http://localhost:8000/images/honey-product.jpg",
      categoryId: "5c1e4ef9f8a84d0a5438c123",
      amount: 5
    }
  ],
  loading: false,
  error: null
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

    case actionTypes.INCREASE_PRODUCT_AMT:
      {
        const productsInCart = [...state.productsInCart];
        const product = productsInCart.find(product => product._id === action.payload);
        product.amount++;
        return {
          ...state,
          productsInCart: productsInCart
        }
      }

    case actionTypes.DECREASE_PRODUCT_AMT:
      {
        const productsInCart = [...state.productsInCart];
        const product = productsInCart.find(product => product._id === action.payload);
        if(product.amount === 1) {
          return {
            ...state,
            productsInCart: state.productsInCart.filter(product => product._id !== action.payload)
          }
        }else{
          product.amount--;
          return {
            ...state,
            productsInCart: productsInCart
          }
        }
      }
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        productsInCart: state.productsInCart.filter(product => product._id !== action.payload)
      }
    
    case actionTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload)
      }

    case actionTypes.DELETE_PRODUCT_FAILED:
      console.log(action.payload)
      return {
        ...state,
        error: action.payload
      }

    case actionTypes.ADD_PRODUCT_ADMIN_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        products: [...state.products, action.payload]
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