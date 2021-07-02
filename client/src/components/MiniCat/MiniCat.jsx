import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

import "./Mini.css"

export  function MiniCat() {
    return (
        <div className="Mini-main">
            <div className="Mini-cat" style={{fontWeight:450}}> ALL CATAGORIES
                <MdKeyboardArrowRight size="35" />
            </div>
            <div>Mobile</div>
            <div>Cars</div>
            <div>Bikes</div>
            <div>House</div>
            <div>Electronics</div>
        </div>
    )
}
