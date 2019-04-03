import React from 'react';
import './Form.scss';
import { Field, reduxForm } from 'redux-form'

const ProductForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <Field
          name="productName"
          type="text"
          placeholder="Название товара"
          className="form__productName form__field"
          component="input"
        />
      </div>
      <div>
        <Field
          name="productDescription"
          type="textarea"
          rows="5"
          placeholder="Описание"
          className="form__description form__field"
          component="textarea"
        />
      </div>
      <div className="form__priceContainer">
        <Field
          name="productPrice"
          type="number"
          placeholder="Цена"
          className="form__price form__field"
          component="input"
        />
        <h5> грн.</h5>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'productForm'
})(ProductForm);