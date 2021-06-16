import React from "react";
import "./AddPosting.css";
import {IconContext} from "react-icons";


let data = [
  { Catname: "Mobile Phones", icon: "FaMobileAlt" },
  { Catname: "Cars", icon: "FaCar" },
  { Catname: "Bike", icon: "FaBiking" },
  { Catname: "House", icon: "FaHome" },
  { Catname: "Electronics Appliences", icon: "FaTools" },
];
export function AddPosting() {
  return (
    <div className="AddPosting-main">
      <h3 className="AddPosting-heading">POST YOUR AD</h3>
      <div className="AddPosting-wraper">
        <div className="AddPosting-heading">CHOOSE A CATEGORY</div>
        <div className="AddPosting-Cat-Main">
          <div className="AddPosting-Cat-lists borderright">
            <IconContext.Provider       value={{ color: 'blue', size: '50px' }}
>
              <div>
                {data.map((data) => (
                  <div>
                      <div><span></span> {data.Catname}</div>
                      <div>{<data.icon/>}</div>
                  </div>
                ))}
              </div>
            </IconContext.Provider>
          </div>
          <div className="AddPosting-Cat-lists">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
