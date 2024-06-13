import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const nameId = useId();
  const emailId = useId();
  const pswdId = useId();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Мінімум 3 символи!")
      .required("Це обов'язкове поле!"),
    email: Yup.string()
      .email("Має бути у форматі пошти!")
      .required("Це обов'язкове поле!"),
    password: Yup.string()
      .min(6, "Мінімум 3 символи!")
      .max(30, "Максимум 30 символів!"),
  });

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} type="text" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={emailId}>Email</label>
          <Field name="email" id={emailId} type="email" />
          <ErrorMessage component="span" />
        </div>
        <div>
          <label htmlFor={pswdId}>Password</label>
          <Field name="password" id={pswdId} type="password" />
          <ErrorMessage component="span" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
