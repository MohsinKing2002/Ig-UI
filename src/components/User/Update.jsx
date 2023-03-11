import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Update() {
  const [avatar, setAvatar] = useState();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
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
        <Card.Title>Edit Profile</Card.Title>
        <br />
        <Form>
          {avatar ? (
            <img
              style={{
                height: "8vh",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
              src={avatar}
              alt="post_prev"
            />
          ) : null}
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control onChange={handleImage} type="file" accept="image/*" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              name="name"
              type="text"
              value={user.name}
              onChange={handleInputs}
              placeholder="Enter Your Name"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter Your Email"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              name="password"
              type="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Enter New Password"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              name="confirmPassword"
              type="password"
              value={user.confirmPassword}
              onChange={handleInputs}
              placeholder="* Confirm Your Password"
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            {" "}
            Update{" "}
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted">
        <NavLink className="link" to="/account">
          Back to account !!
        </NavLink>
      </Card.Footer>
    </Card>
  );
}

export default Update;
