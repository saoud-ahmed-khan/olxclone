import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiPhone } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";
import { BiUserPlus } from "react-icons/bi";
import { Error } from "./ErrorMessage";
import "./login.css";
import { Signup } from "../signup/Signup";
import AOS from "aos";

import "aos/dist/aos.css";

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
    .required("Phone Number Missing")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: Yup.string().required(" Password Required"),
});

export function Login({ modal, setModal }) {
  const [sign, setSign] = React.useState(false);

  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <>
      {modal ? (
        <div className="background">
          <div className="form-login" data-aos="zoom-in">
            <AiOutlineClose
              onClick={() => {
                setModal((prev) => !prev);
              }}
              className="login-cross"
              size="30"
            />

            <div>
              <h1>login</h1>
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
            <div className="login-button">
              <BiUserPlus size="35" className="login-logo" />
              <button
                onClick={() => {
                  setModal((prev) => !prev);
                  setSign(true);
                }}
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <Signup sign={sign} setSign={setSign} />
    </>
  );
}
