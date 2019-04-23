import React from "react";
import { Field, reduxForm } from "redux-form";

const AdminLogin = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Пароль</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Пароль"
          />
        </div>
      </div>
      <button>Войти</button>
    </form>
  );
};

export default reduxForm({
  form: "adminLoginForm" // a unique identifier for this form
})(AdminLogin);
