import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Error } from "./Error";
import { AddPic } from "./AddPic";
import "./AddPostForm.css";
const n = 5;
const initialValue = {
  Title: "",
  Description: "",
  Price: "",
  State: "",
  Name: "",
  city: "",
};
const submit = (values) => {
  console.log(`formdata ${values}`);
};
const validationSchema = Yup.object({
  Title: Yup.string().required("Title mising"),
  Name: Yup.string().required("Name mising"),
  Description: Yup.string().required("Description missing"),
  State: Yup.string().required("State missing"),
  Price: Yup.number()
    .typeError("Price must be in number")
    .positive("Price must be greater than zero")
    .required("Price required"),
  city: Yup.string().required("City missing"),
});
const options = [
  {
    value: "",
    key: "Select State",
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
export function Formpost() {
  return (
    <div className="Formik-Form-Add">
      <Formik
        validationSchema={validationSchema}
        onSubmit={submit}
        initialValues={initialValue}
      >
        <Form>
          <div className="add-firstBlock">
            <div className="add-firstBlock-inner">
              <h3>INCLUDE SOME DETAILS</h3>
              <div className="add-title">
                <div className="add-title-inner">
                  <label>Title</label>
                  <Field type="text" id="Title" name="Title" />
                </div>
                <ErrorMessage component={Error} name="Title" />
              </div>
              <div className="add-title">
                <div className="add-title-inner" style={{ width: "100%" }}>
                  <label>Description</label>
                  <Field
                    type="text"
                    as="textarea"
                    id="Description"
                    name="Description"
                    className="textarea"
                  />
                </div>
                <ErrorMessage component={Error} name="Description" />
              </div>
              <div className="Condition-add">
                <label>Condition</label>
                <div className="addConditon-iner">
                  <div>New</div>
                  <div>Used</div>
                </div>
              </div>
            </div>
          </div>

          <div className="add-firstBlock">
            <div className="add-firstBlock-inner">
              <h3>SET A PRICE</h3>

              <div className="add-title">
                <div className="add-title-inner">
                  <label>Price</label>
                  <Field type="number" id="Price" name="Price" />
                </div>
                <ErrorMessage component={Error} name="Price" />
              </div>
            </div>
          </div>
          <div className="add-firstBlock">
            <div className="add-firstBlock-inner">
              <h3>UPLOAD UP TO 05 PHOTOS</h3>
              <div className="addPic-upper">
                {[...Array(n)].map((n) => (
                  <AddPic />
                ))}
              </div>
            </div>
          </div>

          <div className="add-firstBlock">
            <div className="add-firstBlock-inner">
              <h3>CONFIRM YOUR LOCATION</h3>

              <div className="add-title">
                <div className="add-title-inner">
                  <label>City</label>
                  <Field
                    className="selectadd"
                    as="select"
                    id="city"
                    name="city"
                  >
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
            </div>
          </div>

          <div className="add-firstBlock">
            <div className="add-firstBlock-inner">
              <h3>REVIEW YOUR DETAILS</h3>
              <div className="add-title">
                <div className="add-title-inner">
                  <label>Name</label>
                  <Field type="text" id="Name" name="Name" />
                </div>
                <ErrorMessage component={Error} name="Name" />
              </div>
            </div>
          </div>

          <div className="">
            <button onClick={submit} type="submit">
              Post Now
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
