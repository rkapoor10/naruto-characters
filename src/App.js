import React, { useState } from "react";
import { anime } from "./Characters.js";

import "./styles.css";
var url =
  "https://www.pngkey.com/png/full/143-1431670_download-naruto-logo-naruto-shippuden-logo-png.png";

export default function App() {
  var [catg, setCatg] = useState("team");
  function onClickHandler(catg) {
    setCatg(catg);
    console.log(catg);
  }
  return (
    <div className="App">
      <div className="container">
        <img id="logo" src={url} alt=" " />
        <h3>Click any group to reveal characters and there special Jutsu</h3>
        <hr />
        <button onClick={() => onClickHandler("team")}>Team 7</button>
        <button onClick={() => onClickHandler("akatsuki")}>Akatsuki</button>
        <button onClick={() => onClickHandler("otsutsuki")}>Otsutsuki</button>
        <div className="row">
          {anime[catg].map((c) => {
            return (
              <div className="charContainer">
                <img id="characters" src={c.image} alt=" " />
                <p style={{ color: "white" }}>{c.name}</p>
                <p style={{ color: "white" }}>JUTSU : {c.jutsu}</p>
              </div>
            );
          })}
        </div>
        <div>{}</div>
      </div>
    </div>
  );
}
