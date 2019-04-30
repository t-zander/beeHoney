import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAll, deleteCategory, addCategory, editCategory } from '../../../actions/categories/categories';
import './AdminCategories.scss';
import AddCategoryForm from './AdminCategoryForm/AdminCategoryForm';
import EditCategoryForm from './EditCategoryForm/EditCategoryForm';

class AdminCategories extends Component {

  state = {
    categoryToEdit: null
  }

  componentDidMount(){
    this.props.onFetchCategories();
  }
  
  deleteCategoryHandler = (id) => {
    this.props.onDeleteCategory(id)
  }

  addCategoryHandler = (values) => {
    this.props.onAddCategory(values.name)
  }

  editCategoryHandler = (id) => {
    this.setState({
      categoryToEdit: id
    })
  }
  
  editCategorySumbit = (values) => {
    this.props.onEditCategory(values._id, values.name)
    this.setState({
      categoryToEdit: null
    })

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
                  className="category-edit fas fa-pen-square"
                  onClick={() => this.editCategoryHandler(category._id)}></i>
                <i 
                  className="category-trash fas fa-window-close" 
                  onClick={() => this.deleteCategoryHandler(category._id)}></i>
                  {category._id === this.state.categoryToEdit 
                  ? <EditCategoryForm 
                    initialValues={{...category}}
                    onSubmit={this.editCategorySumbit}/> : <h1>{category.name}</h1>}
                </div>
            );
          })}
          <div className="category-add">
            <AddCategoryForm 
              onSubmit={this.addCategoryHandler}/>
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
    onDeleteCategory: (id) => dispatch(deleteCategory(id)),
    onAddCategory: (name) => dispatch(addCategory(name)),
    onEditCategory: (id, name) => dispatch(editCategory(id, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCategories);