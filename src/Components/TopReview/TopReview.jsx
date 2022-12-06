import React from "react";
import "./TopReview.css";

const TopReview = ({ title, category, date, image }) => {
  return (
    <div className="App__Top_review">
      <div className="App__Top_review-content">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <div className="App__Top_review-info">
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default TopReview;
