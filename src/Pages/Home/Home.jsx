import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReviewCard, TopReview } from "../../Components";
import { getReviews } from "../../utils";
import "./Home.css";

const Home = ({ filter, setFilter }) => {
  const [topReview, setTopReview] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true)
    if (location.search.startsWith("?category=")) {
      setFilter(location.search.slice(10));
      getReviews(location.search.slice(10)).then((data) => {
        if (data) {
          setTopReview((prevReview) => (prevReview = data[0]));
          data.shift();
          setReviews(data);
          setIsLoading(false);
        }
      });
    } else {
      getReviews(filter).then((data) => {
      if (data) {
        setTopReview((prevReview) => (prevReview = data[0]));
        data.shift();
        setReviews(data);
        setIsLoading(false);
      }
    });
    }
    
  }, [filter, location.search, setFilter]);

  return (
    <>
      {isLoading ? (
        <div className="App__Home-loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="App__Home">
          <div className="App__Home-top_review">
            <Link to={"/Review/" + topReview.review_id}>
              <TopReview
                title={topReview.title}
                category={topReview.category}
                date={topReview.created_at}
                image={topReview.review_img_url}
                votes={topReview.votes}
              />
            </Link>
          </div>
          <ul className="App__Home-review_list">
            {reviews.map((review) => (
              <li className="App__Home-review" key={review.review_id}>
                <Link to={"/Review/" + review.review_id}>
                  <ReviewCard
                    title={review.title}
                    category={review.category}
                    date={review.created_at}
                    image={review.review_img_url}
                    votes={review.votes}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
