import React from "react";
import * as Fa from "react-icons/fa";
import "./AddPosting.css";

export function RightInner({ data }) {
  return (
    <div className="AddPosting-Cat-lists-Rightinner" style={{cursor:"pointer"}}>
      <div>{data.title}</div>
      <div>
        <Fa.FaArrowRight size="20" />
      </div>
    </div>
  );
}
