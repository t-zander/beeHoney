import React, {Component} from 'react';

import { connect } from 'react-redux';
import * as categoriesActions from '../../../actions/categories/categories';
import * as productsActions from '../../../actions/products/products';


import '../../../styles/productsSidebar.scss'

class ProductsSidebar extends Component {

  state = {
    selectedCategoryId: null
  }

  componentDidMount() {
    this.props.onFetchCategories();
  }

  selectCategory = (categoryId) => {
    this.setState({
      selectedCategoryId: categoryId
    });
    this.props.onSelectProductsFromCategory(categoryId);
  }

  selectAllProducts = () => {
    this.setState({
      selectedCategoryId: null
    });
    this.props.onSelectAllProducts();
  }

  render() {
    
    return (
      <div className="categories">
        <h2>Категории:</h2>
        {/* 
          нужно решить оставить так или сделать роутами
        */}
        <ul className="categories__list">
          <li className={this.state.selectedCategoryId === null ? 
              'categories__list__item active' : 'categories__list__item'} 
              onClick={this.selectAllProducts}>Все товары
          </li>
          {this.props.categories.map( category => {
            return <li 
              className={this.state.selectedCategoryId === category._id ? 
                'categories__list__item active' : 'categories__list__item'}
              key={category._id}
              onClick={() => this.selectCategory(category._id)}
              >
              {category.name}
            </li>
            }
          )}
        </ul>
      </div>
      
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onFetchCategories: () => dispatch( categoriesActions.fetchAll() ),
    onSelectAllProducts: () => dispatch( productsActions.fetchAll() ),
    onSelectProductsFromCategory: (categoryId) => dispatch( productsActions.fetchByCategory(categoryId) )
  }
}
 
const mapStateToProps = (state) => {
  return{
    categories: state.categoriesReducer.categories
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsSidebar);