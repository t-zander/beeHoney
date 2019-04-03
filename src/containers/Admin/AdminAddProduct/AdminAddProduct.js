import React, {Component} from 'react';
import defaultImg from '../../../assets/images/default_img.png';
import ProductForm from '../ProductForm/ProductForm';

class AdminAddProduct extends Component {
  
  render() {
    return (
      <div className="admin__card">
        <div className="admin__uploadImg" onClick={() => this.fileInput.click()}>
          <input type="file" style={{display: 'none'}} ref={fileInput => this.fileInput = fileInput}/> 
          <img src={defaultImg} alt="img"/>
          <i className="admin__uploadIcon fas fa-upload"></i>
        </div>
        
        <ProductForm/>
      </div>
    );
  }
}
 
export default AdminAddProduct;