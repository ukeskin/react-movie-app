import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="flex p-4 text-4xl text-white font-thin">
        <Link to="/">movies</Link>
      </nav>
    </div>
  );
}

export default Header;
