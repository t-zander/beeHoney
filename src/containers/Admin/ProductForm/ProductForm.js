import React, { Component } from "react";
import "./Form.scss";
import { Field, reduxForm } from "redux-form";
import { validate } from "./validationHelper";
import defaultImg from "./../../../assets/images/default_img.png";

const renderInputField = ({
  input,
  type,
  className,
  placeholder,
  meta: { touched, error }
}) => {
  let validationErrorEl = (
    <span className="validationError">
      <i className="fas fa-exclamation-circle" /> {error}
    </span>
  );

  return (
    <div>
      <div className="form__fieldContainer">
        <input
          {...input}
          placeholder={placeholder}
          type={type}
          className={className}
        />
        {touched && (error && validationErrorEl)}
      </div>
    </div>
  );
};

const renderSelectField = ({
  input,
  categories,
  type,
  className,
  placeholder,
  meta: { touched, error }
}) => {
  let validationErrorEl = (
    <span className="validationError">
      <i className="fas fa-exclamation-circle" /> {error}
    </span>
  );

  return (
    <div>
      <div className="form__fieldContainer">
        <select
          {...input}
          placeholder={placeholder}
          type={type}
          className={className}
        >
          <option value="">Выбрать категорию</option>
          {categories.map(category => (
            <option value={category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        {touched && (error && validationErrorEl)}
      </div>
    </div>
  );
};

const ProductForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    categories,
    valid
  } = props;
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
      {categories.length ? (
        <Field
          name="categoryId"
          type="select"
          className="form__category form__field"
          component={renderSelectField}
          categories={categories}
        />
      ) : null}
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
        className={
          !valid || !props.imgFile
            ? "form__button btnDisabled"
            : "form__button btnEnabled"
        }
      >
        Сохранить
      </button>
    </form>
  );
};

export default reduxForm({
  form: "productForm",
  validate // <--- validation function given to redux-form
  //warning  <--- warning function given to redux-form
})(ProductForm);
