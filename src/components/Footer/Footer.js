import React from "react";
import "./Footer.css";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiMessenger } from "react-icons/si";

export function Footer() {
  return (
    <div className="Footer-main">
      <div className="Footer-column">
        <div className="footer-header">POPULAR CATEGORIES</div>
        <div>Mobile</div>
        <div>Cars</div>
        <div>Bikes</div>
        <div>House</div>
        <div>Electronics</div>
      </div>
      <div className="Footer-column">
        <div className="footer-header">TRENDING SEARCHES</div>
        <div>Mobile</div>
        <div>Cars</div>
        <div>Bikes</div>
        <div>House</div>
        <div>Electronics</div>
      </div>
      <div className="Footer-column">
        <div className="footer-header">ABOUT US</div>
        <div>Mobile</div>
        <div>Cars</div>
        <div>Bikes</div>
        <div>House</div>
        <div>Electronics</div>
      </div>
      <div className="Footer-column-logo">
        <div className="footer-header">FOLLOW US </div>
        <div className="social-logos">
        <div>
          <SiFacebook />
        </div>
        <div>
          <SiInstagram />
        </div>
        <div>
          <SiTwitter />
        </div>
        <div>
          <SiMessenger />
        </div>
      </div>
      </div>
    </div>
  );
}
