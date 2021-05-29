import React from "react";
import "./Feature.css";
const data=[
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"16000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"5000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"34000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"95000"
    }
]
export function FeaturedItems() {
  return (
    <div className="Featured-Main">
      <div className="Featured-inner">
        <div className="FEatured-header"> More From Featured Items </div>

      </div>
    </div>
  );
}
