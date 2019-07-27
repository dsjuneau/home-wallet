import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <h1>
        NabBar
        <Link to="/">Calendar</Link>
        <Link to="/page2/">Page 2</Link>
        <Link to="/page3/">Page 3</Link>
        Welcome {props.userName}
      </h1>
    </nav>
  );
}
