import React from "react";
import "./Feature.css";
import { FeatureItems } from "./FeatureItems";
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
        <div className="featues-header">Featured Items</div>
        <div className="Feature-map">
            {
              data.map(items=> <FeatureItems items={items.title} rs={items.rs}/>)  
            }
        </div>
    </div>
  );
}
