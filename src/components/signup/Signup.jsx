import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineUser } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { ImAddressBook } from "react-icons/im";
import { IoMdLogIn } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { Error } from "../Login/ErrorMessage";
import "../Login/login.css";
const options = [
  {
    value: "",
    key: "Select City",
  },

  {
    value: "karachi",
    key: "karachi",
  },
  {
    value: "lahore",
    key: "lahore",
  },
  {
    value: "queeta",
    key: "queeta",
  },
];
const initialValue = {
  phone: "",
  password: "",
  username: "",
  address: "",
  passwordConfirmation: "",
  city: "",
};
const submit = (values: any) => {
  console.log(`formdata ${values}`);
};
const phoneRegExp = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;

const validationSchema = Yup.object({
  username: Yup.string().required("Username mising"),
  address: Yup.string().required("address mising"),

  phone: Yup.string()
    .required("Phone Number missing")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: Yup.string().required("Password missing"),
  passwordConfirmation: Yup.string()
    .required("Confirm Password missing")
    .oneOf([Yup.ref("password"), null], "Passwords is not matching"),
  city: Yup.string().required("City is required"),
});
export function Signup() {
  return (
    <div className="form-signup">
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
            <ErrorMessage component={Error} name="username" />
          </div>

          <div className="phone">
            <div className="phone-inner">
              <BiPhone className="login-logo" size="35" />
              <Field type="text" id="phone" name="phone" />
            </div>
            <ErrorMessage component={Error} name="phone" />
          </div>

          <div className="phone">
            <div className="phone-inner">
              <FaCity className="login-logo" size="30" />
              <Field className="select" as="select" id="city" name="city">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.key}
                    </option>
                  );
                })}
              </Field>
            </div>
            <ErrorMessage component={Error} name="city" />
          </div>
          <div className="phone">
            <div className="phone-inner">
              <ImAddressBook className="login-logo" size="35" />
              <Field type="text" id="address" name="address" />
            </div>
            <ErrorMessage component={Error} name="address" />
          </div>
          <div className="password">
            <div className="phone-inner">
              <RiLockPasswordLine size="35" className="login-logo" />
              <Field type="password" id="password" name="password" />
            </div>
            <ErrorMessage component={Error} name="password" />
          </div>
          <div className="password">
            <div className="phone-inner">
              <RiLockPasswordFill size="35" className="login-logo" />
              <Field
                type="password"
                id="passwordConfirmation"
                name="passwordConfirmation"
              />
            </div>
            <ErrorMessage component={Error} name="passwordConfirmation" />
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