import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const StarRating = ({ rating }) => {
  const stars = [];

  // Create an array of five stars
  for (let i = 1; i <= 5; i++) {
    let starIcon;
    if (i <= rating) {
      starIcon = <StarRateIcon  color="warning" fontSize="small" />;
    } else if (i - rating <= 0.5) {
      starIcon = <StarHalfIcon color="warning" fontSize="small" />;
    } else {
      starIcon = <StarOutlineIcon color="warning" fontSize="small" />;
    }

    stars.push(starIcon);
  }

  return <div>{stars}</div>;
};

export default StarRating;
