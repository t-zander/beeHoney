import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAll, deleteCategory} from '../../../actions/categories/categories';
import './AdminCategories.scss';

class AdminCategories extends Component {

  componentDidMount(){
    this.props.onFetchCategories();
  }
  
  deleteCategoryHandler = (id) => {
    this.props.onDeleteCategory(id)
  }

  render() {
    return (
      <div className="admin">
        <div className="categories">
          {this.props.categories.map(category => {
            return (
              <div 
                key={category._id} 
                className="category">
                <i 
                  className="category-trash fas fa-window-close" 
                  onClick={() => this.deleteCategoryHandler(category._id)}></i>
                <h1>{category.name}</h1>
              </div>
            );
          })}
          <div>
            <i class="fas fa-folder-plus"></i>
          </div>
        </div>
      </div>
    
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchCategories: () => dispatch(fetchAll()),
    onDeleteCategory: (id) => dispatch(deleteCategory(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCategories);