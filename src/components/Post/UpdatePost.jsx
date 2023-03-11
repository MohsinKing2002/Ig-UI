import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../Util/Loader";

function UpdatePost() {
  const params = useParams();
  const navigate = useNavigate();

  const [newCaption, setCaption] = useState();

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
        <Card.Title>Update Post</Card.Title>
        <Form>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="text"
              value={newCaption}
              onChange={(e) => {
                setCaption(e.target.value);
              }}
              placeholder="Update Caption.."
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted">
        You're not allowed to change the picture !!! Update the Caption
        only.....
      </Card.Footer>
    </Card>
  );
}

export default UpdatePost;
