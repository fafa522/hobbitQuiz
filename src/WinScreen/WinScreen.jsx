import React from "react";
import "./WinScreen.scss";
import Header from "../NavBarHeader/Header";
import Ring from "../Assets/img/pixelRing.gif";

const WinScreen = () => {
  return (
    <>
      <Header />
      <div className="wrap">
        <h1>
          You are amazing, <span>Mellon</span>!
        </h1>
        <img src={Ring} alt="ring"></img>
      </div>
    </>
  );
};

export default WinScreen;
