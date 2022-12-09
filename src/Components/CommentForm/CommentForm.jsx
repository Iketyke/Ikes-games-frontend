import React, { useState } from "react";
import { postComment } from "../../utils";
import "./CommentForm.css";

const CommentForm = ({ review_id, setFormSubmitted }) => {
  const [commentBody, setCommentBody] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(review_id, "Anonymous", commentBody).then((data) => {
    });
    setFormSubmitted((prev) => prev + 1)
    setCommentBody("");
  };
  const handleChange = (e) => {
    setCommentBody(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="App__Comment_form">
        <div className="App__Comment_form-box">
          <textarea
            value={commentBody}
            id="commentBody"
            placeholder="Have your say!"
            onChange={handleChange}
          ></textarea>
          <button type="submit">
            <div className="App__Comment_form-icon_submit" />
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
