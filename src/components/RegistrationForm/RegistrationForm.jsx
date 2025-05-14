import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Мінімум 2 символи").required("Ім'я обов'язкове"),
  email: Yup.string()
    .email("Невірна електронна адреса")
    .required("Email обовʼязковий"),
  password: Yup.string()
    .min(6, "Мінімум 6 символів")
    .required("Пароль обовʼязковий"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Реєстрація</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Імʼя
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="div" />
          </label>

          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage className={css.error} name="email" component="div" />
          </label>

          <label className={css.label}>
            Пароль
            <Field className={css.input} type="password" name="password" />
            <ErrorMessage
              className={css.error}
              name="password"
              component="div"
            />
          </label>

          <button className={css.button} type="submit">
            Зареєструватися
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
