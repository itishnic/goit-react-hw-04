import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./SearchBar.module.css";
import React from "react";


const schema = Yup.object().shape({
  query: Yup.string().min(3, "Too Short!").required("Required"),
});



const SearchBar = ({ submit }) => {
  const handleSubmit = (values, action) => {
    submit(values.query);
    action.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <Field
            name="query"
            placeholder="Search images and photos"
            type="text"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
