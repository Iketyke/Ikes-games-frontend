import React from "react";
import { deleteComment } from "../../utils";
import "./Comment.css";

const Comment = ({
  comment_id,
  author,
  created_at,
  body,
  votes,
  setFormSubmitted,
}) => {
  const handleDelete = () => {
    deleteComment(comment_id);
    setFormSubmitted((prev) => (prev += 1));
  };
  return (
    <div className="App__Comment">
      <div className="App__Comment-header">
        <p className="App__Comment-author">{author}</p>
        <p>{created_at}</p>
      </div>
      <p>{body}</p>
      <p>{votes} likes</p>
      <p onClick={handleDelete}>✖️</p>
    </div>
  );
};

export default Comment;
