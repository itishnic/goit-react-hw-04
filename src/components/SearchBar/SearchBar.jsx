import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";







const SearchBar = ({ submit }) => {
  const handleSubmit = (values, action) => {
    
    action.resetForm();
    if (values.query.trim() === "") {
       toast.error("Please enter search query", {
         position: "top-center",
         duration: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
       });
       return;
    }
    submit(values.query);
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            placeholder="Search images and photos"
            type="text"
          />
          <button className={css.button} type="submit">
            Search
          </button>

          <Toaster closeOnClick={true} />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
