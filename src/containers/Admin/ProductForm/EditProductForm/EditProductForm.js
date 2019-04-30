import React, { Component } from "react";
import "../../ProductForm/Form.scss";
import { Field, reduxForm } from "redux-form";

class EditProductForm extends Component {
  componentDidMount() {
    this.props.initialize(this.props.initialValues);
  }
  render() {
    const { handleSubmit, submitting, pristine, categories } = this.props;
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
      </form>
    );
  }
}

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

export default reduxForm({
  form: "editProduct"
})(EditProductForm);
