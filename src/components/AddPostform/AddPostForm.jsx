import React from "react";
import "./AddPostForm.css";
import { Formpost } from "./Formpost";

export function AddPostForm() {
  return (
    <div className="AddPostForm-wrapper">
      <h1 style={{ textAlign: "center" }}>POST YOUR AD</h1>
      <div className="AddPostForm-main">
        <div className="AddPostForm-main-inner">
          <div>
            <h3>SELECTED CATEGORY</h3>
            <p style={{ marginTop: "0" }}>Mobiles / Tablets</p>
          </div>
        </div>
        <div className="AddPostForm-Form-Main">
          <Formpost />
        </div>
      </div>
    </div>
  );
}
