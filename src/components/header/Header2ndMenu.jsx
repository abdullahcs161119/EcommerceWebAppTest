import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

import { logout } from "../../services/userSlice";
import { useDispatch } from "react-redux";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header2ndMenu = () => {
  const productsSelected = useSelector((state) => state.cart.cart_products);

  let dispatch = useDispatch();
  const [state, SetState] = useState([
    {
      id: 1,
      mynavbtn: "Cart",
      linkURL: "/cart",
      linkIcon: faCartArrowDown,
    },
    { id: 2, mynavbtn: "Logout", linkURL: "/login" },
  ]);

  const userToken = useSelector((state) => state.user.token);
  return (
    <Nav>
      {state.map((item, i) =>
        i === 0 ? (
          <Nav.Link
            eventKey={item.id}
            href={item.linkURL}
            style={
              i === 0
                ? { display: "flex", columnGap: "1rem", alignItems: "center" }
                : null
            }
          >
            <div
              style={{
                display: "flex",
                columnGap: "1rem",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={item.linkIcon} />
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "#000",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1.05rem",
                  fontWeight: "bold",
                }}
              >
                <p>{productsSelected.length}</p>
              </div>
            </div>
            {item.mynavbtn}
          </Nav.Link>
        ) : i === 1 ? (
          userToken ? (
            <Nav.Link
              eventKey={item.id}
              onClick={() => {
                dispatch(logout());
                window.location.href = "/login";
              }}
            >
              {item.mynavbtn}
            </Nav.Link>
          ) : (
            ""
          )
        ) : (
          ""
        )
      )}
    </Nav>
  );
};
