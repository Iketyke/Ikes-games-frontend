import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, getReview, incVote } from "../../utils";
import "./Review.css";
import { Comment, CommentForm } from "../../Components";

const Review = () => {
  const [formSubmitted, setFormSubmitted] = useState(0);
  const [comments, setComments] = useState([]);
  const [currReview, setCurrReview] = useState({});
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [voted, setVoted] = useState(0);

  useEffect(() => {
    getReview(review_id).then((data) => {
      setCurrReview(data.review);
      getComments(review_id).then((data) => {
        
        setComments(data);
        setIsLoading(false);
      });
    });
  }, [review_id, formSubmitted]);
  const handleVote = (vote) => {
    incVote(review_id, vote).then((data) => {
      if (voted !== vote) {
        setVoted(vote);
        const updatedReview = { ...currReview };
        updatedReview.votes += vote;
        setCurrReview(updatedReview);
      }
    });
  };
  return (
    <>
      {isLoading ? (
        <div className="App__Review-loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="App__Review">
          <div className="App__Review-image">
            <img src={currReview.review_img_url} alt={currReview.title} />
          </div>
          <div className="App__Review-content">
            <h2>{currReview.title}</h2>
            <p>Designed by {currReview.designer}</p>

            <div className="App__Review-info">
              <p>{currReview.created_at}</p>
              <p>{currReview.category}</p>
            </div>
            <p>{currReview.review_body}</p>
            <p className="App__Review-by">Review by {currReview.owner}</p>
            <div className="App__Review-likes">
              <p>{currReview.votes} likes</p>
              <div
                onClick={() => {
                  handleVote(1);
                }}
                className={
                  voted === 1
                    ? "App__Review-icon_liked"
                    : "App__Review-icon_like"
                }
              />
              <div
                onClick={() => {
                  handleVote(-1);
                }}
                className={
                  voted === -1
                    ? "App__Review-icon_disliked"
                    : "App__Review-icon_dislike"
                }
              />
            </div>
          </div>
          <div className="App__Review-comments">
            <h3>
              {comments.length
                ? `Comments - ${comments.length}`
                : "No Comments - Be the First!"}
            </h3>
            <CommentForm setFormSubmitted={setFormSubmitted} review_id={review_id}/>
            <ul>
              {comments.map((comment) => (
                <li key={comment.comment_id}>
                  <Comment
                    setFormSubmitted={setFormSubmitted}
                    comment_id={comment.comment_id}
                    author={comment.author}
                    created_at={comment.created_at}
                    body={comment.body}
                    votes={comment.votes}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Review;
