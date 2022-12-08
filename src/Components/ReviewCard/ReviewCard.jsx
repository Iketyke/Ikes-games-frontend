import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ title, category, date, image, votes }) => {
  return (
    <div className="App__Review_card">
      <div className="App__Review_card-image">
        <img src={image} alt={title} />
      </div>
      <div className="App__Review_card-content">
        <h2>{title}</h2>
        <div className="App__Review_card-info">
          <p>{category}</p>
          <p>{date}</p>
        </div>
        <p>{votes} likes </p>
      </div>
    </div>
  );
};

export default ReviewCard;
