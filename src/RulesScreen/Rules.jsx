import React from "react";
import "./Rules.scss";

import Header from "../NavBarHeader/Header";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <>
      <Header />
      <h1 className="Rules">Rules</h1>
      <ol>
        <li>
          Try to recognize character from a children's fantasy novel - The
          Hobbit, or There and Back Again
        </li>
        <li>
          Fill a form on <Link to="/">Quiz</Link> page
        </li>
        <li>A Name value must begin with capital letters</li>
        <li>
          You must replace Characters <span>í</span> and <span>ó</span> with
          regular <span>i</span> and <span>o </span>
          respectively
        </li>
        <li>
          A Age of character must be calculated at the moment of Battle of Five
          Armies (2941)
        </li>
        <li>If Age is unknown, enter "Unknown"</li>
      </ol>
    </>
  );
};

export default Rules;
