import React, {Component} from 'react';
import defaultImg from '../../../assets/images/default_img.png';
import ProductForm from '../ProductForm/ProductForm';
import { connect } from "react-redux";
import {fetchAll} from "../../../actions/categories/categories";
import {addProductAdmin} from "../../../actions/products/products";

class AdminAddProduct extends Component {
  state = {
    imgPreviewUrl: null,
    imgFile: null
  }

  handleSubmit = (formValues) => {
    const productToSend = {...formValues, ...{product_image: this.state.imgFile}};
    this.props.onAddProduct(productToSend)
  }

  // get categories and pass into form
  componentDidMount() {
    this.props.onFetchCategories()
  }

  uploadFileHandler = (event) => {
    let img = event.target.files[0];
    let reader  = new FileReader();
    reader.onloadend = () => {
      if(this.state.imgPreviewUrl !== reader.result) {
        this.setState({
          imgPreviewUrl: reader.result,
          imgFile: img
        })
      }
    };
    if (img) {
      reader.readAsDataURL(img);
    }
  }

  removeImgHandler = (e) => {
    e.stopPropagation()
    this.setState({
      imgPreviewUrl: null
    })
  }

  render() {
    return (
      <div className="admin__card admin__addProductCard">
        <div className="admin__img admin__uploadImg" onClick={() => this.fileInput.click()}>
          <input 
            type="file" style={{display: 'none'}} 
            ref={fileInput => this.fileInput = fileInput} 
            onChange={this.uploadFileHandler} onClick={(event)=> {event.target.value = null}}/>
          <img src={this.state.imgPreviewUrl || defaultImg} alt="img"/>
          <div className="admin__iconsContainer">
            <i className="admin__uploadImgIcon fas fa-upload"></i>
            <i className="admin__uploadImgIcon fas fa-times" onClick={this.removeImgHandler}></i>
          </div>
        </div>
        
        <ProductForm onSubmit={this.handleSubmit} categories={this.props.categories} imgFile={this.state.imgFile}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCategories: () => dispatch(fetchAll()),
    onAddProduct: (product) => dispatch(addProductAdmin(product)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminAddProduct);