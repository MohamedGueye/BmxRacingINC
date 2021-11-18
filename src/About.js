import { render } from "@testing-library/react";
import React from "react";
import "./About.css";
import profilePic from "./images/profilepic.png";
import SocialMedia from "./SocialMedia";
import "./SocialMedia.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function About() {
  const message =
    "Welcome to BMX Racing INC, your number one source for all things related to BMX bikes. We’ve hand-crafted our sport bikes with precision and care to offer you the best biking experience. Founded in 2001 by three avid bike enthusiasts - Geordy, Mohamed, And Kyle - We envisioned a company that prioritized quality and affordability above all else.";

  return (
    <>
      <div className="about">
        <h1 id="about-us-header">About BMX Racing INC</h1>

        <div className="about-container">
          <div className="text1">{message}</div>

          <div className="team-container">
            <div className="member1 member">
              <img src={profilePic} alt="Geordy" />
              <h2>Geordy Vincent</h2>
              <p>CISC 371</p>
            </div>
            <div className="member2 member">
              <img src={profilePic} alt="Mohamed" />
              <h2>Mohamed Guaye</h2>
              <p>CISC 371</p>
            </div>
            <div className="member3 member">
              <img src={profilePic} alt="Kyle" />
              <h2>Kyle Curesky</h2>
              <p>CISC 371</p>
            </div>
          </div>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
