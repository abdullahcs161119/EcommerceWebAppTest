import React, { useState } from "react";
import { Form, Col, Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import { login } from "../../services/userSlice";
import { useDispatch } from "react-redux";
import "../../styles/login.scss";

const Login = () => {
  let dispatch = useDispatch();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`https://reqres.in/api/login`, { email, password })
      .then((res) => {
        dispatch(login(res.data.token));
        window.location.href = "/dashboard";
      });
  };
  return (
    <section id="login">
      <div className="login-form">
        <Card className="my-card">
          <Container>
            <Form>
              <h1 className="my-header">Login! To Self Assessment</h1>
              <hr className="hr" />

              <Form.Group controlId="formBasicEmail">
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-font">Email address</Form.Label>
                <Form.Control
                  className="form-font"
                  type="email"
                  placeholder="Enter Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Row className="form-font">
                  <Form.Label as={Col} lg="6" className="form-padding">
                    Enter Password
                  </Form.Label>
                </Form.Row>
                <Form.Control
                  className="form-font"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} lg="6" className="form-pad">
                  <Button
                    className="mybutton"
                    variant="primary"
                    onClick={handleLogin}
                  >
                    login
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </Container>
        </Card>
      </div>
    </section>
  );
};
export default Login;
