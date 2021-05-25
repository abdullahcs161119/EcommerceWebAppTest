import React, { useState, useEffect } from "react";
import { MyNavbar } from "../header/Navbar";
import { useSelector } from "react-redux";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../styles/cart.scss";
export const Cart = () => {
  const productsSelected = useSelector((state) => state.cart.cart_products);
  const history = useHistory();
  let totalPrice = 0;
  productsSelected.map((data) => {
    data.variants.map((data1) => {
      totalPrice = totalPrice + parseInt(data1.price);
    });
  });
  const handleMoreToBuy = () => {
    history.push("/dashboard");
  };

  return (
    <section id="cart">
      <MyNavbar />
      <div className="main_layout">
        <h1>Thankyou! for buying</h1>
        <Button variant="primary" onClick={handleMoreToBuy}>
          More To Buy
        </Button>
      </div>
      <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
        <Col
          lg={6}
          style={{
            borderRight: "1px solid #e0e1e4",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <div className="cards_div">
            {productsSelected.map((data) => {
              return (
                <Card>
                  <Card.Img variant="top" src={data.image.src} />
                  <Card.Body>
                    <Card.Text>{data.title}</Card.Text>
                    <Card.Text>
                      {data.variants.map((data) => {
                        return data.price;
                      })}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Col>
        <Col
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "3rem",
          }}
        >
          <h1>Hope you find shopping here interesting!</h1>
          <h3>Your total price is</h3>
          <div
            style={{
              display: "flex",
              backgroundColor: "palevioletred",
              width: "50%",
              height: "60px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "2%",
            }}
          >
            <p
              style={{
                marginBottom: "0px",
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              {totalPrice}
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};
