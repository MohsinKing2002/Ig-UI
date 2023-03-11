import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const Post = ({
  postId,
  caption,
  image,
  owner,
  likes = [],
  comments = [],
  isHome,
  isMyAccount,
  isSingleUser,
}) => {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState();

  const handleLike = async (e) => {
    setLike(!like);
  };

  return (
    <Card>
      {isHome ? (
        <>
          <NavLink
            to={`/users/${owner.userId}`}
            className="link user d-flex align-items-center"
          >
            <img src={owner.avatar} alt="" />
            <h4>{owner.name}</h4>
          </NavLink>
          <hr />
        </>
      ) : null}
      <Card.Text className="d-flex align-items-center justify-content-around">
        {caption}

        <NavLink className="link" to={`/post/update/${postId}`}>
          <AddPhotoAlternateIcon className="icon" />
        </NavLink>
      </Card.Text>

      <hr />
      <img className="post-img" src={image} alt="post_image" />
      <hr />
      <span className="d-flex align-items-center justify-content-around">
        <button
          style={{ cursor: "text" }}
          className="bg-transparent border-0 text-primary text-muted"
        >
          {likes.length} Likes
        </button>
        <button
          style={{ cursor: "text" }}
          className="bg-transparent border-0 text-primary text-muted"
        >
          {comments.length} Comments
        </button>
      </span>
      <hr />
      <div className="d-flex justify-content-around">
        {like ? (
          <FavoriteIcon onClick={handleLike} className="icon" />
        ) : (
          <FavoriteBorderIcon onClick={handleLike} className="icon" />
        )}

        {["top"].map((placement) => (
          <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
              <Popover
                style={{ background: "aliceblue" }}
                id={`popover-positioned-${placement}`}
              >
                <span className="d-flex align-items-center justify-content-around m-1">
                  <Form.Control
                    type="text"
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                    placeholder="Write your comment.."
                    required
                  />
                  <Button className="w-25" variant="outline-info">
                    Add
                  </Button>
                </span>
              </Popover>
            }
          >
            <AddCommentIcon className="icon" />
          </OverlayTrigger>
        ))}

        {isMyAccount ? <DeleteForeverIcon className="icon" /> : null}
      </div>
    </Card>
  );
};

export default Post;
