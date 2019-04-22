import React, {Component} from 'react';
import './Form.scss';
import { Field, reduxForm } from 'redux-form';
import {validate} from './validationHelper';
import defaultImg from './../../../assets/images/default_img.png';

const renderInputField = ( {input, /* label,  */type, className, placeholder, meta: { touched, error } }) => {
  let validationErrorEl = <span className="validationError"><i className="fas fa-exclamation-circle"></i> {error}</span>;
  
  return(
    <div>
     {/*  <label>{label}</label> */}
      <div className="form__fieldContainer">
        <input {...input} placeholder={placeholder} type={type} className={className}/>
        {touched && ((error && validationErrorEl))}
      </div>
    </div>
  )
}

const renderSelectField = ({input, categories, type, className, placeholder, meta: { touched, error } }) => {
  let validationErrorEl = <span className="validationError"><i className="fas fa-exclamation-circle"></i> {error}</span>;
  
  return(
    <div>
     {/*  <label>{label}</label> */}
      <div className="form__fieldContainer">
        <select {...input} placeholder={placeholder} type={type} className={className}>
          <option value="">
            Выбрать категорию
          </option>
          {categories.map( (category) => 
            <option value={category._id} key={category._id}>
              {category.name}
            </option>
          )}
        </select>
        {touched && ((error && validationErrorEl))}
      </div>
    </div>
  )
}


const ProductForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, categories, valid } = props;
  return (
    <form onSubmit={handleSubmit} className="form">

      <Field
        name="name"
        type="text"
        placeholder="Название товара"
        className="form__productName form__field"
        component={renderInputField}
      />
      <Field
        name="description"
        type="textarea"
        rows="4"
        placeholder="Описание"
        className="form__description form__field"
        component={renderInputField}
      />
      {categories.length ?
        <Field
<<<<<<< HEAD
          name="description"
          type="textarea"
          rows="4"
          placeholder="Описание"
          className="form__description form__field"
          component={renderField}
        />
      </div>
      
   {/*    {categories.length ? 
        <div>
          <label>Категория:</label>
          <Field
              name="categoryId"
              type="select"
              className="form__category form__field"
              component="select"
            >
          {categories.map( (category, index) => 
            <option value={category._id} key={category._id} >
              {category.name}
            </option>
          )}
          </Field> 
        </div>
        : null} */}
        {/* ДОДЕЛАТЬ СЕЛЕКТ БЕЗ РЕДАКС ФОРМ */}
        <select defaultValue={'123'}>
          <option>
            qwe
          </option>
          <option>
            123
          </option>
        </select>
=======
            name="categoryId"
            type="select"
            className="form__category form__field"
            component={renderSelectField}
            categories={categories}
          />
        : null}
>>>>>>> 37ea049e2c8ac62c349f65e07b2bb299f646fc85
      <div className="form__priceContainer">
        <Field
          name="price"
          type="number"
          placeholder="Цена"
          className="form__price form__field"
          component={renderInputField}
        />
        <h5> грн.</h5>
      </div>
      <button 
        type="submit" 
        disabled={!valid || !props.imgFile} 
        className={!valid || !props.imgFile ? 'form__button btnDisabled' : 'form__button btnEnabled'}
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