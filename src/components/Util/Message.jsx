import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import TelegramIcon from "@mui/icons-material/Telegram";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useState } from "react";

function Message() {
  const [name, setName] = useState();
  const [chat, setChat] = useState("");
  const [res, setRes] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateResponse = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "977912fe14mshce8316a7ee14283p11d865jsn202496ae1112",
        "X-RapidAPI-Host": "ai-chatbot.p.rapidapi.com",
      },
    };

    const res = await fetch(
      `https://ai-chatbot.p.rapidapi.com/chat/free?message=${chat}&uid=user1`,
      options
    );
    const msg = await res.json();
    setRes(msg?.chatbot?.response);
    setLoading(false);
  };

  return (
    <Card className="text-center message">
      <Card.Header>
        <div className="logo" to="/">
          <img
            src="https://thumbs.dreamstime.com/b/print-204010516.jpg"
            alt=""
          />
          <i>funstasticVgram</i>
        </div>
      </Card.Header>
      <Card.Body>
        {show ? (
          <Card.Title className="fs-6 animate-live text-danger d-flex align-items-center justify-content-center">
            <RadioButtonCheckedIcon className="text-danger icon me-2" />
            You're chatting with AI ChatBot
          </Card.Title>
        ) : null}
        <hr />

        {!show ? (
          <div>
            <Form.Control
              style={{ margin: "18px 0" }}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter user name"
              required
            />
            <Button
              disabled={!name}
              onClick={() => setShow(true)}
              className="mt-3"
              variant="info"
            >
              Start Chating
            </Button>
          </div>
        ) : (
          <Card.Text>
            <div className="border border-info message_box p-2 rounded overflow-auto styled-bar">
              <div className="me chat">
                {" "}
                <span>{name} :</span>
                {chat}
              </div>
              <div className="bot chat">
                {" "}
                <span>Bot :</span>{" "}
                {loading ? (
                  <img
                    style={{ height: "6vh", margin: "auto", display: "block" }}
                    src="https://aquamarineexotic.com/adminpanel/assets/images/ajax-spinner.gif"
                    alt="loader img"
                  />
                ) : (
                  res
                )}
              </div>
            </div>
            <div className="d-flex align-items-center my-1">
              <Form.Control
                type="text"
                value={chat}
                onChange={(e) => {
                  setChat(e.target.value);
                }}
                placeholder="write your message.."
                required
                onKeyPress={(e) => {
                  e.key === "Enter" && generateResponse();
                  setLoading(true);
                }}
              />
              <span onClick={generateResponse}>
                <TelegramIcon className="message_icon ms-2 bg-dark text-info border border-info p-1 rounded" />
              </span>
            </div>
          </Card.Text>
        )}
      </Card.Body>
      {!show ? (
        <Card.Footer className="text-muted">
          You'll we chating with a AI chatbot.
        </Card.Footer>
      ) : (
        <Card.Footer className="text-muted">
          Your chats are not parmanent !! <br />
          You can leave anytime.. (by reloding..)
        </Card.Footer>
      )}
    </Card>
  );
}

export default Message;
