import React from "react";
import { imageUrl } from "../../../../../config.json";

const ImageUpload = props => {
  return (
    <div
      className="admin__img admin__uploadImg"
      onClick={() => props.reference.fileInput.click()}
    >
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInput => (props.reference.fileInput = fileInput)}
        onChange={e => props.changeImageHandler(e)}
      />
      <img
        src={
          props.previewImg
            ? props.previewImg
            : `${imageUrl}${props.product.imageUrl}`
        }
        alt="картинка товара"
      />
      <div className="admin__iconsContainer">
        <i className="admin__uploadImgIcon fas fa-upload" />
        <i
          className="admin__uploadImgIcon fas fa-times"
          onClick={e => props.resetImg(e)}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
