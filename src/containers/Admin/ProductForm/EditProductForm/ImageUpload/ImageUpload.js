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
    </div>
  );
};

export default ImageUpload;
