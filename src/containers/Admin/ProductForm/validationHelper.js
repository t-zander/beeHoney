const validate = values => {
  console.log(values);
  const errors = {};
  if (!values.name) {
    errors.name = "Это обязательное поле!";
  }
  if (!values.description) {
    errors.description = "Это обязательное поле!";
  }
  if (!values.price) {
    errors.price = "Это обязательное поле!";
  }
  if (!values.categoryId) {
    errors.categoryId = "Это обязательное поле!";
  }
  return errors;
};
export { validate };
