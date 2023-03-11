import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Search({ users }) {
  const [name, setName] = useState("");

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
        <Card.Title>Search Users</Card.Title>
        <br />
        <Form>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Enter User Name"
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Find Users
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer
        style={{ maxHeight: "45vh", overflowY: "auto" }}
        className="styled-bar text-muted"
      >
        {users && users.length > 0
          ? users.map((item) => (
              <NavLink
                key={item._id}
                to={`/users/${item._id}`}
                className="link users user d-flex align-items-center"
              >
                <img src={item.avatar.url} alt="" />
                <h4>{item.name}</h4>
              </NavLink>
            ))
          : "No Users Found !!"}
      </Card.Footer>
    </Card>
  );
}

export default Search;
