import React from 'react';
import { reduxForm, Field } from 'redux-form';

const renderInputField = (field) => {
  const className = `adminCategory-input ${field.meta.touched 
  && field.meta.error 
  ? 'has-error' : ''}`
  return(
    <div className={className}>
      <input 
        id={field.input.name} 
        className='instructor__inp' 
        name={field.name} 
        type={field.type} 
        {...field.input} 
        placeholder={field.placeholder}/>
      <div className='instructorForm__error'>
        {field.meta.touched ? field.meta.error : ''}
      </div>
    </div>
  )
}


const AdminCategoryForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        type='text'
        name='name'
        placeholder='Введите название категории'
        component={renderInputField}/>
      <button type='submit'>
        <i className="fas fa-folder-plus"></i>
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'addCategory'
})(AdminCategoryForm);
