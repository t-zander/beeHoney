import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [
    {
      id: 1,
      price: 100,
      name: 'product 1',
      description: 'super product'
    },
    {
      id: 2,
      price: 200,
      name: 'product 2',
      description: 'super product 2'
    }
  ],
  loading: false
  /* products: {
    productIds: [1, 2],
    1: {
      id: 1,
      price: 100,
      description: 'super product'
    },

    2: {
      id: 2,
      price: 200,
      description: 'super product'
    }
  } */
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
      
    default:
      return state;
  }
}

export default productsReducer;