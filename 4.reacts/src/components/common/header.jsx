import { Link, Menu } from "@mui/material";
import React, { useState } from "react";
import { navlink } from "../data/dummydata";
import { logo } from "../data/images/logo.png";

export const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav">
            <Link to="">
              {navlink.map((links, i) => {
                <Link to={links.url} key={i}>
                  {links.text}
                </Link>;
              })}
            </Link>
          </div>
          <button
            className="toggle"
            onClick={() => setResponsive(!responsive)}
          ></button>
          <Menu className="icon"></Menu>
        </div>
      </header>
    </>
  );
};

export default Header;
