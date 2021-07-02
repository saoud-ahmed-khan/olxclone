import React from "react";
import "./fresh.css";
import { FreshItems } from "./freshitems";
const data=[
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"73000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"88000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"348000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"4000"
    },
     {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"56000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"95000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"34090"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"95000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"16000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"60000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"90000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"55000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"78000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"93000"
    },
    {
        title:"orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        rs:"54000"
    }
]
export function Fresh() {
  return (
    <div className="fresh-Main">
        <div className="fresh-header">Fresh Items Listing</div>
        <div className="fresh-map">
            {
              data.map(items=> <FreshItems items={items.title} rs={items.rs}/>)  
            }
        </div>
    </div>
  );
}
