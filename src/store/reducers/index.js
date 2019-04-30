import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import blogReducer from './blog';
import productsReducer from './products';
import aboutReducer from './about';
import categoriesReducer from './categories';

export default combineReducers({
  form: formReducer,
  blogReducer: blogReducer,
  productsReducer: productsReducer,
  categoriesReducer: categoriesReducer,
  aboutReducer: aboutReducer
}); 
