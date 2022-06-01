import React from "react";
import StarRatingComponent from "react-rating-stars-component";
import "./filter.css";
const Filter = ({ searching, rate }) => {
  const ratingChanged = (newRating) => {
    rate(newRating);
  };
  return (
    <div className="filter">
      <div>
        <input
          type="text"
          placeholder="Search a movie"
          className="searchbox"
          onChange={(e) => searching(e.target.value)}
        />
      </div>

      <StarRatingComponent count={7} onChange={ratingChanged} size={24} />
    </div>
  );
};
export default Filter;
