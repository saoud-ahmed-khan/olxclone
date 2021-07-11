import { React, useState, useEffect } from "react";
import "./AddPosting.css";
import { AddPostingLeft } from "./AddPostingLeft";
import * as Fa from "react-icons/fa";
import { AddPostingRight } from "./AddPostingRight";
import { useHistory } from "react-router-dom";

let data = [
  { Catname: "Mobiles", icon: Fa.FaMobileAlt },
  { Catname: "Cars", icon: Fa.FaCar },
  { Catname: "Bike", icon: Fa.FaBiking },
  { Catname: "House", icon: Fa.FaHome },
  { Catname: "Electronics", icon: Fa.FaTools },
];


export function AddPosting() {
  const history = useHistory();

const authsellpage = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/sell/catagories", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    console.log(res);
    if (res.success===false) {
      history.push("/login");

    }
  } catch (error) {
    console.log(error);
    history.push("/login");
  }
};
  const [subData, setSubData] = useState("");
  useEffect(() => {
    authsellpage();
  }, []);

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
          </div>
          <div className="AddPosting-Cat-lists borderright">
            <AddPostingRight inerdata={subData} />
          </div>
        </div>
      </div>
    </div>
  );
}
