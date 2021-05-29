import React from "react";
import "./Feature.css"
import pics from "../../assests/images.png";

export function FeatureItems(props) {
  return (
    <div className="Featured-item">
      <img src={pics} alt="items pics" />
      <div style={{fontSize:"25px ", fontWeight:"500", marginTop:"3y%"}}>RS {props.rs}</div>
      <div> {props.items}</div>
    </div>
  );
}
