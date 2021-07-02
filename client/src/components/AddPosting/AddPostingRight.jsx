import React from "react";
import "./AddPosting.css";
import { RightInner } from "./RightInner";

let Mobiles = [
  { title: "Tablets" },
  { title: "Accessories" },
  { title: "Mobile Phones" },
];
let Cars = [{ title: "Cars" }, { title: "Accessories" }, { title: "Parts" }];
let Bike = [
  { title: "Motor Cycle" },
  { title: "Bycyles" },
  { title: "Parts" },
  { title: "Accessories" },
];
let House = [
  { title: "Lands & Plots" },
  { title: "Houses" },
  { title: "Appartments & Flats" },
  { title: "Portions" },
  { title: "Shops" },
];
let Electronics = [
  { title: "Computer & Accessories" },
  { title: "Games  & Accessories" },
  { title: "AC  & Cooler" },
  { title: "TV & Accessories" },
];

export function AddPostingRight({ inerdata }) {
  return (
    <div>
      {inerdata === "Mobiles"
        ? Mobiles.map((data) => <RightInner inerdata={inerdata} data={data} />)
        : null}
      {inerdata === "Cars"
        ? Cars.map((data) => <RightInner inerdata={inerdata}  data={data} />)
        : null}
      {inerdata === "Bike"
        ? Bike.map((data) => <RightInner inerdata={inerdata} data={data} />)
        : null}
      {inerdata === "Electronics"
        ? Electronics.map((data) => <RightInner inerdata={inerdata} data={data} />)
        : null}
      {inerdata === "House"
        ? House.map((data) => <RightInner inerdata={inerdata} data={data} />)
        : null}
    </div>
  );
}
