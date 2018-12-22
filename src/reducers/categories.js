import * as actionTypes from '../actions/actionTypes';

const initialState = {
  selectedCategory: null,
  categories: []
}

const categoriesReducer = (state = initialState, action) => {
  switch(action.type) {
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