import * as actionTypes from '../actions/actionTypes';

const initialState = {
  articles: [],
  selectedArticle: null
};

const blogReducer = (state = initialState, action) => {
  switch(action.type) {

    default:
      return state;
  }
}

export default blogReducer;