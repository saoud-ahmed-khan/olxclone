import React from "react";
import * as Fa from "react-icons/fa";

import "./AddPosting.css";

export function AddPostingLeft({ data, setData, sub }) {
  return (
    <div className={sub === data.Catname ? "active" : null}>
      <div
        className="AddPosting-Cat-lists-inner addhover "
        onClick={() => {
          setData(data.Catname);
        }}
      >
        <div className="add-logo">
          <span style={{ marginRight: "10px" }}>{<data.icon size="20" />}</span>
          <span>{data.Catname}</span>
        </div>
        <div>
          <Fa.FaArrowRight size="20" style={{ alignItems: "center" }} />
        </div>
      </div>
    </div>
  );
}
