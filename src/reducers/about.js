import * as actionTypes from '../actions/actionTypes';

const initialState = {
  about: {
    about: '',
    imageUrl: ''
  },
  loading: false
};

const aboutReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_ABOUT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        about: action.payload
      }

    default:
      return state;
  }
}

export default aboutReducer;