import React, { useState } from "react";
import { Nav } from "react-bootstrap";

export const HeaderMenu = () => {
  const [state, SetState] = useState([
    {
      menuHeader: "Home",
      myNavLink: "/",
    },
    {
      menuHeader: "Men's Wear",
      myNavLink: "/",
    },
    {
      menuHeader: "Women's Wear",
      myNavLink: "/",
    },
    {
      menuHeader: "Accessories",
      myNavLink: "/",
    },
    {
      menuHeader: "Contact Us",
      myNavLink: "/",
    },
  ]);
  return (
    <Nav className="mr-auto">
      {state.map((item) => (
        <Nav.Link className="mylinkswrapper" to={item.myNavLink}>
          {item.menuHeader}
        </Nav.Link>
      ))}
    </Nav>
  );
};
