import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import blogReducer from './blog';
import productsReducer from './products';

export default combineReducers({
  form: formReducer,
  blog: blogReducer,
  products: productsReducer
}); 
