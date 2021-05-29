import React from "react";
import "./fresh.css"
import pics from "../../assests/images.png";

export function FreshItems(props) {
  return (
    <div className="fresh-item">
      <img src={pics} alt="items pics" />
      <div style={{fontSize:"25px ", fontWeight:"500", marginTop:"3%"}}>RS {props.rs}</div>
      <div> {props.items}</div>
    </div>
  );
}
