import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getReview } from "../../utils";
import "./Review.css";

const Review = () => {
  const [currReview, setCurrReview] = useState({});
  const location = useLocation();
  console.log(location.pathname.split("/").reverse()[0])
  useEffect(() => {
    getReview(location.pathname.split("/").reverse()[0]).then((data) =>
      setCurrReview(data.review)
    );
  }, [location]);
  console.log(currReview)
  return (
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
  );
};

export default Review;
