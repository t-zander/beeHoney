import * as actionTypes from '../actions/actionTypes';

const initialState = {
  selectedCategory: null,
  categories: [],
  error: null
}

const categoriesReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        error: null,
        categories: state.categories.filter(category => category._id !== action.payload)
      }
    case actionTypes.DELETE_CATEGORY_FAIL:
      return {
        ...state,
        error: action.paylaod,
        categories: state.categories
      }
    case actionTypes.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        error: null
      }
    case actionTypes.ADD_CATEGORY_FAIL: 
      return { 
        ...state,
        categories: state.categories,
        error: action.paylaod
      }
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload
      }

    default:
      return state;
  }
}

export default categoriesReducer;