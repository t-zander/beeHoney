import React, { Component } from "react";
import "./Admin.scss";
import * as categoriesActions from "../../actions/categories/categories";
import {
  fetchAll,
  fetchByCategory,
  deleteProductById
} from "../../actions/products/products";
import { connect } from "react-redux";
import AdminAddProduct from "./AdminAddProduct/AdminAddProduct";
import EditProductForm from "./ProductForm/EditProductForm/EditProductForm";
import ImageUpload from "./ProductForm/EditProductForm/ImageUpload/ImageUpload";
import Product from "./Product/Product";

class Admin extends Component {
  state = {
    productToEdit: null,
    selectedImage: null,
    selectedImagePreviewUrl: null
  };

  componentDidMount() {
    this.props.onFetchCategories();
    this.props.onFetchProducts();
  }

  getProductsByCateg = categoryId => {
    this.props.onFetchByCategory(categoryId);
  };

  deleteProductHandler = productId => {
    this.props.onDeleteProductById(productId);
  };

  editHandler = id => {
    this.setState({ productToEdit: id });
  };

  changeImageHandler = e => {
    let img = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      if (this.state.imgPreviewUrl !== reader.result) {
        this.setState({
          selectedImage: img,
          selectedImagePreviewUrl: reader.result
        });
      }
    };
    if (img) {
      reader.readAsDataURL(img);
    }
  };

  render() {
    return (
      <div className="admin">
        <div className="admin__categories">
          {this.props.categories.map(category => {
            return (
              <div
                onClick={() => this.getProductsByCateg(category._id)}
                key={category._id}
                className="admin__category"
              >
                <h1>{category.name}</h1>
              </div>
            );
          })}
        </div>

        <div className="admin__products">
          <AdminAddProduct />
          {this.props.products.map(product =>
            product._id === this.state.productToEdit ? (
              <div className="admin__card" key={product._id}>
                <ImageUpload
                  changeImageHandler={this.changeImageHandler}
                  product={product}
                  reference={this}
                  previewImg={this.state.selectedImagePreviewUrl}
                />
                <EditProductForm
                  initialValues={{ name: "qwe" }}
                  categories={this.props.categories}
                />
              </div>
            ) : (
              <Product
                key={product._id}
                edit={this.editHandler}
                delete={this.deleteProductHandler}
                product={product}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories,
    products: state.productsReducer.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCategories: () => dispatch(categoriesActions.fetchAll()),
    onFetchProducts: () => dispatch(fetchAll()),
    onFetchByCategory: categoryId => dispatch(fetchByCategory(categoryId)),
    onDeleteProductById: productId => dispatch(deleteProductById(productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
