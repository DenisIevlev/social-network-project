import React from 'react';
import { Field } from 'redux-form';
import classes from './FormsControls.module.css';

export const FormControl = ({ input, meta: {touched, error}, ChildElement, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
      <div>
        <ChildElement {...input} {...props} />
      </div>
      {hasError ? <span>{error}</span> : ""}
    </div>
  )
}
export const Textarea = (props) => {
  return (
    <FormControl {...props} ChildElement="textarea"></FormControl>
  )
}

export const Input = (props) => {
  return (
    <FormControl {...props} ChildElement="input"></FormControl>
  )
}

export const createField = (placeholder, name, component, validate, props = {}, text = '') => {
  return (
    <div>
      <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props} /> {text}
    </div>
  )
}