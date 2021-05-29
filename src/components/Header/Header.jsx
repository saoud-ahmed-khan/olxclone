import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import "./Header.css"
export function Header() {
    

    return (
        <div className="header-main">
            
            <div className="header-logo">A|X</div>

            <div className="header-location">
                <button><RiSearchLine size="25"/></button>
                <input placeholder="Pakistan" type="text"/>
                <button><MdKeyboardArrowDown size="30"/></button>
            </div>

            <div className="header-items">
                <div className="header-searchbar">
                    <input placeholder="Find cars mobile phone and more.." type="text"/>
                </div>
                <div className="header-searchbutton">
                    <button><RiSearchLine size="30"/></button>
                </div>
            </div>
            <div className="header-login">Login</div>
            <div className="header-sale"><span><TiPlus/></span> SELL</div>

            </div>
    )
}
