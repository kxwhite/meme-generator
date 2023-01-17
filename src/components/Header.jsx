import React from "react";
import Image from "../images/troll-face.webp";

export default function Header() {
  return (
    <header>
      <div className="header--brand">
        <img src={Image} className="header--img"/>
        <p className="header--brand-name">Meme Generator</p>
      </div>
      <p>React Course - Project 3</p>
    </header>
  )
}
