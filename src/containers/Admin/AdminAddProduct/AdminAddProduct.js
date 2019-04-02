import React, {Component} from 'react';
import defaultImg from '../../../assets/images/default_img.png';

class AdminAddProduct extends Component {

  uploadImgHandler = () => {
    console.log('upload image')
  }

  render() { 
    return (
      <div className="admin__card">
        <div className="admin__img" onClick={this.uploadImgHandler}>
          <img src={defaultImg} alt="img"/>
          <i className="admin__uploadIcon fas fa-upload"></i>
        </div>
      </div>
    );
  }
}
 
export default AdminAddProduct;