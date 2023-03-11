import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function NewPost() {
  const [image, setImage] = useState();
  const [caption, setCaption] = useState();

  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
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
        <Card.Title>New Post</Card.Title>
        <br />
        <Form>
          {image ? (
            <img
              style={{
                height: "25vh",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
              src={image}
              alt="post_prev"
            />
          ) : null}
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              onChange={handleImage}
              type="file"
              accept="image/*"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              name="caption"
              type="text"
              value={caption}
              onChange={(e) => {
                setCaption(e.target.value);
              }}
              placeholder="Write Post's Caption"
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Submit
          </Button>{" "}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default NewPost;
