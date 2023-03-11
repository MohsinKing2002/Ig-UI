import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Post from "../Post/Post";
import Users from "../apis/Users";

function Account({ posts }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    Users.forEach((item) => {
      if (item.userId == 3) setUser(item);
    });
  }, [Users]);
  return (
    <div className="home_page">
      <Col
        sm={5}
        className="mobile-users styled-bar rounded  bg-light styled-bar d-flex justify-content-center h-100 overflow-auto"
      >
        <div className="profile">
          <img
            style={{
              height: "25vh",
              borderRadius: "150px",
              marginBottom: "20px",
            }}
            src={user && user.avatar}
            alt="avatar"
          />
          <div className="user d-flex align-items-center my-2">
            <AccountCircleIcon className="icon" />
            <h4>{user && user.name}</h4>
          </div>
          <div
            style={{ lineBreak: "anywhere" }}
            className="user d-flex align-items-center my-2"
          >
            <EmailIcon className="icon" />
            <h4>{user && user.email}</h4>
          </div>
          <div className="user d-flex align-items-center my-2">
            <FavoriteIcon className="icon" />
            <h4>{user && user?.followings?.length} Followings</h4>
          </div>
          <div className="user d-flex align-items-center my-2">
            <FavoriteBorderIcon className="icon" />
            <h4>{user?.followers?.length} Followers</h4>
          </div>
          <div className="user d-flex align-items-center my-2">
            <StickyNote2Icon className="icon" />
            <h4>{user?.posts?.length} Posts</h4>
          </div>
          <br />
          <Button variant="outline-info">
            <NavLink className="link text-primary" to="/me/update">
              {" "}
              Edit Profile
            </NavLink>
          </Button>{" "}
          <Button variant="outline-warning">Log out</Button>{" "}
          <Button variant="danger">
            <NavLink className="link text-light" to="/me/delete">
              {" "}
              Delete Profile
            </NavLink>
          </Button>{" "}
        </div>
      </Col>

      <Col sm={7} className="styled-bar h-100 overflow-auto text-center">
        {posts && posts.length > 0 ? (
          posts.map((item) => (
            <Post
              key={item.postId}
              postId={item.postId}
              image={item.image}
              caption={item.caption}
              likes={item.likes}
              comments={item.comments}
              isMyAccount={true}
              isHome={false}
            />
          ))
        ) : (
          <h6>No Posts yet !!</h6>
        )}
      </Col>
    </div>
  );
}

export default Account;
