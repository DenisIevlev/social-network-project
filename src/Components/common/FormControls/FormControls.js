import React from 'react';
import classes from './FormsControls.module.css';

export const FormControl = ({input, meta, ChildElement, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
      <div>
      <ChildElement {...input} {...props}/>
      </div>
      {hasError ? <span>{meta.error}</span> : ""}
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