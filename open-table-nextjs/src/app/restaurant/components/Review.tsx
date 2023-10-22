import React from "react";
import ReviewCard from "./ReviewCard";
import { Review } from "@prisma/client";

const Review = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div>
      <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
        What {reviews.length} {reviews.length == 1 ? `person is` : "people are"}{" "}
        saying
      </h1>
      <div>
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default Review;
