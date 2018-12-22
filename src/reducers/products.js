import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
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
    console.log(action.payload);
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