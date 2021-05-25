import React, { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import Products from "../../assets/products.json";
import { addToCart } from "../../services/cartSlice";
import "../../styles/productCard.scss";
import { useDispatch } from "react-redux";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "lodash";

export const ProductCard = () => {
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);

  const handleUsersFilter = debounce(async (query) => {
    setFilteredData([]);

    console.log(query.target.value);
    const q = query.target.value.toLowerCase();
    const newUsers = await Products.filter((c) =>
      c.title.toLowerCase().includes(q)
    );
    setFilteredData(newUsers);
  }, 1000);

  return (
    <section id="product_Card" style={{ padding: "2rem" }}>
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search your product here"
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={(value) => handleUsersFilter(value)}
          />
        </InputGroup>
      </div>
      <div>
        <h3>New Arrivals</h3>
      </div>
      <div className="cards_div">
        {filteredData.map((data) => {
          return (
            <Card>
              <Card.Img variant="top" src={data.image.src} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                  {data.variants.map((data) => {
                    return data.price;
                  })}
                </Card.Text>
                <Button
                  onClick={() => {
                    dispatch(addToCart(data));
                    alert(`${data.title} Added To Cart`);
                  }}
                  variant="primary"
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
