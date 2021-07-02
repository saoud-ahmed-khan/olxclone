import React from "react";
import * as Fa from "react-icons/fa";
import "./AddPosting.css";
import { NavLink } from "react-router-dom";

export function RightInner({ data, inerdata }) {
  return (
    <NavLink to={`/catagories/${inerdata}`}>     

    <div
      className="AddPosting-Cat-lists-Rightinner"
      style={{ cursor: "pointer" }}
    >
         <div>{data.title}</div>
      <div>
        <Fa.FaArrowRight size="20" />
      </div>
    </div>
    </NavLink>

  );
}
