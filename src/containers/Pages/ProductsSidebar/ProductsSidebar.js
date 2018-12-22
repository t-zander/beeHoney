import React, {Component} from 'react';

import { connect } from 'react-redux';
import * as categoriesActions from '../../../actions/categories/categories';
import * as productsActions from '../../../actions/products/products';


import '../../../styles/productsSidebar.scss'

class ProductsSidebar extends Component {

  componentDidMount() {
    this.props.onFetchCategories();
  }

  selectCategory(categoryId) {
    this.props.onSelectProductsFromCategory(categoryId);
  }

  render() { 
    return (
      <div className="categories">
        <h2>Категории:</h2>
        <ul className="categories__list">
          {this.props.categories.map( category => 
            <li 
              className="categories__list__item" 
              key={category._id}
              onClick={() => this.selectCategory(category._id)}
              >
              {category.name}
            </li>
          )}
        </ul>
      </div>
      
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onFetchCategories: () => dispatch( categoriesActions.fetchAll() ),
    onSelectProductsFromCategory: (categoryId) => dispatch( productsActions.fetchByCategory(categoryId) )
  }
}
 
const mapStateToProps = (state) => {
  return{
    categories: state.categoriesReducer.categories
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsSidebar);