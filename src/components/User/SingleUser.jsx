import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/Post";
import Users from "../apis/Users";
import Posts from "../apis/Posts";

function SingleUser() {
  const params = useParams();
  const [follow, setFollow] = useState();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Users.forEach((item) => {
      if (item.userId == params.id) {
        setUser(item);
      }
    });
    if (user && user.posts) {
      const arr = [];
      user.posts.forEach((item) => {
        Posts.forEach((elem) => {
          if (item.postId == elem.postId) {
            arr.push(elem);
          }
        });
      });
      setPosts(arr);
    }
  }, [params.id, user]);

  const handleFollow = async (e) => {
    setFollow(!follow);
  };

  return (
    <div className="home_page">
      <Col
        sm={5}
        className="mobile-users rounded bg-light styled-bar d-flex justify-content-center h-100 overflow-auto"
      >
        <div className="profile ">
          <img
            style={{
              height: "25vh",
              width: "25vh",
              objectFit: "cover",
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
            <FavoriteBorderIcon className="icon" />
            <h4>{user?.followings?.length} Followings</h4>
          </div>

          <div className="user d-flex align-items-center my-2">
            <FavoriteIcon className="icon" />
            <h4>{user?.followers?.length} Followers</h4>
          </div>

          <div className="user d-flex align-items-center my-2">
            <StickyNote2Icon className="icon" />
            <h4>{user?.posts?.length} Posts</h4>
          </div>

          <br />

          <Button
            onClick={handleFollow}
            variant={follow ? "danger" : "primary"}
          >
            {follow ? "Unfollow" : "Follow"} User
          </Button>
        </div>
      </Col>

      <Col sm={7} className="styled-bar h-100 overflow-auto text-center">
        {posts?.length > 0 ? (
          posts?.map((item) => (
            <Post
              key={item.postId}
              postId={item.postId}
              image={item.image}
              caption={item.caption}
              likes={item.likes}
              comments={item.comments}
              isSingleUser={true}
              isHome={false}
              isMyAccount={false}
            />
          ))
        ) : (
          <h6>No Posts yet !!</h6>
        )}
      </Col>
    </div>
  );
}

export default SingleUser;
