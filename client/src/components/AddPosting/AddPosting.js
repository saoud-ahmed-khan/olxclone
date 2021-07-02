import { React, useState } from "react";
import "./AddPosting.css";
import { AddPostingLeft } from "./AddPostingLeft";
import * as Fa from "react-icons/fa";
import { AddPostingRight } from "./AddPostingRight";

let data = [
  { Catname: "Mobiles", icon: Fa.FaMobileAlt },
  { Catname: "Cars", icon: Fa.FaCar },
  { Catname: "Bike", icon: Fa.FaBiking },
  { Catname: "House", icon: Fa.FaHome },
  { Catname: "Electronics", icon: Fa.FaTools },
];

export function AddPosting() {
  const [subData, setSubData] = useState("");
  return (
    <div className="AddPosting-main">
      <h1>POST YOUR AD</h1>
      <div className="AddPosting-wraper">
        <div className="AddPosting-heading">CHOOSE A CATEGORY</div>
        <div className="AddPosting-Cat-Main">
          <div className="AddPosting-Cat-lists">
            <div>
              {data.map((data, index) => (
                <AddPostingLeft
                  key={index}
                  sub={subData}
                  data={data}
                  setData={setSubData}
                />
              ))}
            </div>
            {console.log(subData)}

          </div>
          <div className="AddPosting-Cat-lists borderright">
            <AddPostingRight inerdata={subData} />
          </div>
        </div>
      </div>
    </div>
  );
}
