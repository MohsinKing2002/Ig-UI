import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function DeleteUser() {
  const [password, setPassword] = useState("");

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
      <br />
      <Card.Title>Action can't be undone.. </Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter Your Password"
              required
            />
          </Form.Group>
          <Button type="submit" variant="danger">
            Delete Profile
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted">
        <NavLink className="link" to="/account">
          No !! Go Back..
        </NavLink>
      </Card.Footer>
    </Card>
  );
}

export default DeleteUser;
