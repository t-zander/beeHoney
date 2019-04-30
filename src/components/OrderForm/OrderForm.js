import React from 'react';
import { Field, reduxForm } from "redux-form";
import './OrderForm.scss';
/* import { validate } from "./validationHelper"; */

const OrderForm = (props) => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    categories,
    valid
  } = props;

  return(
    <form onSubmit={handleSubmit} className="orderForm">
      <Field
        name="name"
        type="text"
        placeholder="фио:"
        className="orderForm__field"
        component={renderInputField}
      />

      <Field
        name="phone"
        type="text"
        placeholder="телефон:"
        className="orderForm__field"
        component={renderInputField}
      />

      <Field
        name="email"
        type="text"
        placeholder="e-mail:"
        className="orderForm__field"
        component={renderInputField}
      />

      <Field
        name="city"
        type="text"
        placeholder="город:"
        className="orderForm__field"
        component={renderInputField}
      />
  
      <Field
        name="address"
        type="text"
        placeholder="адрес:"
        className="orderForm__field"
        component={renderInputField}
      />
    </form>
  )
}

export default reduxForm({
  form: "orderForm",
  /* validate */ // <--- validation function given to redux-form
  //warning  <--- warning function given to redux-form
})(OrderForm);


export const renderInputField = ({ input, type, className, placeholder, meta: { touched, error } }) => {

  return (
    <div>
      <div className="orderForm__fieldContainer">
        <input
          placeholder={placeholder}
          {...input}
          type={type}
          className={className}
        />
      </div>
    </div>
  );
}