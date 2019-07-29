import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const handleClick = () => {
    document.cookie = `key=;path=/`;
    props.unAuth();
  };

  return (
    <nav>
      <h1>
        NabBar
        <Link to="/">Calendar</Link>
        <Link to="/page2/">Page 2</Link>
        <Link to="/page3/">Page 3</Link>
        Welcome {props.userName}
        <button onClick={handleClick}>Logout</button>
      </h1>
    </nav>
  );
}
