import React from "react";
import "./AddPosting.css";
import * as Fa from "react-icons/fa";

let data = [
  { Catname: "Mobile Phones", icon: Fa.FaMobileAlt },
  { Catname: "Cars", icon: Fa.FaCar },
  { Catname: "Bike", icon: Fa.FaBiking },
  { Catname: "House", icon: Fa.FaHome },
  { Catname: "Electronics Appliences", icon: Fa.FaTools },
];
export function AddPosting() {
  return (
    <div className="AddPosting-main">
      <h3 className="AddPosting-heading">POST YOUR AD</h3>
      <div className="AddPosting-wraper">
        <div className="AddPosting-heading">CHOOSE A CATEGORY</div>
        <div className="AddPosting-Cat-Main">
          <div className="AddPosting-Cat-lists">
            <div>
              {data.map((data) => (
                <div className="AddPosting-Cat-lists-inner borderright">
                  <div className="add-logo">
                    <span style={{marginRight:"10px"}}>{<data.icon size="25" />}</span>
                    <span>{data.Catname}</span>
                  </div>
                  <div>
                    <Fa.FaArrowRight
                      size="20"
                      style={{ alignItems: "center" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="AddPosting-Cat-lists">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
