import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

const renderInputField = field => {
  const className = `editCategory-input ${
    field.meta.touched && field.meta.error ? "has-error" : ""
  }`;
  return (
    <div className={className}>
      <input
        id={field.input.name}
        className="instructor__inp"
        name={field.name}
        type={field.type}
        {...field.input}
        placeholder={field.placeholder}
      />
      <div className="instructorForm__error">
        {field.meta.touched ? field.meta.error : ""}
      </div>
    </div>
  );
};

class EditCategoryForm extends Component {
  componentDidMount() {
    this.props.initialize(this.props.initialValues);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field type="text" name="name" component={renderInputField} />
        <div className="edit-btn-cont">
          <button className="edit-category-btn" type="submit">
            <i className="fas fa-thumbs-up" />
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "editCategory",
  enableReinitialize: true
})(EditCategoryForm);
