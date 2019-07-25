import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h1>
        NabBar
        <Link to="/">Informational Page</Link>
        <Link to="/Login/">Login</Link>
        <Link to="/Register/">Register</Link>
      </h1>
    </nav>
  );
}
