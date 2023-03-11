import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../Util/Loader";
import Post from "../Post/Post";

function Home({ users, posts }) {
  return (
    <div className="home_page">
      <Col
        sm={4}
        className="mobile-users rounded styled-bar h-100 bg-light px-1 overflow-auto"
      >
        <h3 className="title">users you may know..</h3> <hr />
        {users &&
          users.map((item) => (
            <NavLink
              key={item.userId}
              to={`/users/${item.userId}`}
              className="users link user d-flex align-items-center my-2"
            >
              <img src={item.avatar} alt="" />
              <h4>{item.name}</h4>
            </NavLink>
          ))}
      </Col>

      <Col
        sm={8}
        className="rounded styled-bar h-100 overflow-auto text-center"
      >
        {posts && posts.length > 0 ? (
          posts.map((item) => (
            <Post
              key={item.postId}
              postId={item.postId}
              caption={item.caption}
              image={item.image}
              owner={item.owner}
              likes={item.likes}
              comments={item.comments}
              isHome={true}
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

export default Home;
