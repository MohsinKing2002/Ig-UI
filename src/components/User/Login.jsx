import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <Card className="text-center mobile-card">
      <Card.Header>
        <NavLink className="logo link" to="/">
          <img
            src="https://thumbs.dreamstime.com/b/print-204010516.jpg"
            alt=""
          />
          <i>funstasticVgram</i>
        </NavLink>
      </Card.Header>
      <Card.Body>
        <Card.Title>Sign in</Card.Title>
        <br />
        <Form>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter Your Email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Enter Your Password"
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Log in
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted">
        <NavLink className="link" to="/register">
          Don't have account? Register now..
        </NavLink>
      </Card.Footer>
    </Card>
  );
}

export default Login;
