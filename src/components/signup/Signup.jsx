import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineUser } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import { Error } from "../Login/ErrorMessage";
import "../Login/login.css";

const initialValue = {
  phone: "",
  password: "",
};
const submit = (values: any) => {
  console.log(`formdata ${values}`);
};
const phoneRegExp = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;

const validationSchema = Yup.object({
  phone: Yup.string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: Yup.string().required(" Password Required"),
});
export function Signup() {
  return (
    <div className="form-login">
      <div>
        <h1>Sign Up</h1>
      </div>

      <Formik
        class
        validationSchema={validationSchema}
        onSubmit={submit}
        initialValues={initialValue}
      >
        <Form>
        <div className="phone">
            <div className="phone-inner">
              <AiOutlineUser className="login-logo" size="35" />
              <Field type="text" id="username" name="username" />
            </div>
            <ErrorMessage component={Error} name="phone" />
          </div>
          <div className="phone">
            <div className="phone-inner">
              <BiPhone className="login-logo" size="35" />
              <Field type="text" id="phone" name="phone" />
            </div>
            <ErrorMessage component={Error} name="phone" />
          </div>
          <div className="password">
            <div className="phone-inner">
              <RiLockPasswordLine size="35" className="login-logo" />
              <Field type="password" id="password" name="password" />
            </div>
            <ErrorMessage component={Error} name="password" />
          </div>
          <div className="login-button">
            <IoMdLogIn size="35" className="login-logo" />
            <button onClick={submit} type="submit">
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
