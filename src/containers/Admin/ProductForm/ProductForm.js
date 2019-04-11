import React from 'react';
import './Form.scss';
import { Field, reduxForm } from 'redux-form';
import {validate} from './validationHelper';

const renderField = ( {input, label, type, className, meta: { touched, error } }) => {
  let validationErrorEl = <span className="validationError"><i className="fas fa-exclamation-circle"></i> {error}</span>;
  
  return(
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className={className}/>
        {touched && ((error && validationErrorEl))}
      </div>
    </div>
  )
}

const ProductForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, categories, valid } = props;
  // if selected category is honey show volume 100ml 200ml 300ml
  console.log(submitting);
  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <Field
          name="name"
          type="text"
          placeholder="Название товара"
          className="form__productName form__field"
          component={renderField}
        />
      </div>
      <div>
        <Field
          name="description"
          type="textarea"
          rows="4"
          placeholder="Описание"
          className="form__description form__field"
          component={renderField}
        />
      </div>
      
      {categories.length ? 
        <div>
          {/* <label>Категория:</label>
          <Field
              name="categoryId"
              type="select"
              className="form__category form__field"
              component="select"
            >
          {categories.map( (category, index) => 
            <option value={category._id} key={category._id} selected={index === 2}>
              {category.name}
            </option>
          )}
          </Field> */}
        </div>
        : null}
      <div className="form__priceContainer">
        <Field
          name="price"
          type="number"
          placeholder="Цена"
          className="form__price form__field"
          component={renderField}
        />
        <h5> грн.</h5>
      </div>
      <button type="submit" className={valid ? 'form__button btnEnabled' : 'form__button btnDisabled'}
        >
        Сохранить
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'productForm',
  validate, // <--- validation function given to redux-form
  //warning  <--- warning function given to redux-form
})(ProductForm);