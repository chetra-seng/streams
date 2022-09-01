import { stringify } from "querystring";
import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { createStream } from "../actions";

const inputComponent = ({
  input,
  label,
  meta,
}: {
  input: any;
  label: string;
  meta: any;
}) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} autoComplete="false" />
      {meta.touched && meta.error ? (
        <div className="ui error message">{meta.error}</div>
      ) : null}
    </div>
  );
};

const validateFields = (props: any) => {
  const error = {} as any;
  if (!props.title) {
    error.title = "Title can't be empty";
  }
  if (!props.description) {
    error.description = "Description can't be empty";
  }

  return error;
};

const StreamCreate = (props: any) => {
  return (
    <form
      className="ui form error"
      onSubmit={props.handleSubmit((input: any) => {
        props.createStream(input);
      })}
    >
      <Field name="title" component={inputComponent} label="Enter title" />
      <Field
        name="description"
        component={inputComponent}
        label="Enter description"
      />
      <button className="ui primary button">Submit</button>
    </form>
  );
};

export default connect(null, { createStream })(
  reduxForm({
    form: "streamCreate",
    validate: validateFields,
  })(StreamCreate)
);
