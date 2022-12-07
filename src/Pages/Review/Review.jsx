import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../../utils";
import "./Review.css";

const Review = () => {
  const [currReview, setCurrReview] = useState({});
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReview(review_id).then((data) => {
      setCurrReview(data.review);
      setIsLoading(false);
    });
  }, [review_id]);
  console.log(currReview);
  return (
    <>
      {" "}
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
          </div>
        </div>
      )}
    </>
  );
};

export default Review;
