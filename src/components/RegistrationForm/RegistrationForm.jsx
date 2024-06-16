import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import css from "../FormStyles/FormStyles.module.css";

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
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Email format").required("Required"),
    password: Yup.string().min(6, "Too Short!").max(30, "Too Long!"),
  });

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.field}>
          <label className={css.name} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.input} name="name" id={nameId} type="text" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.field}>
          <label className={css.name} htmlFor={emailId}>
            Email
          </label>
          <Field className={css.input} name="email" id={emailId} type="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.field}>
          <label className={css.name} htmlFor={pswdId}>
            Password
          </label>
          <Field
            className={css.input}
            name="password"
            id={pswdId}
            type="password"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
