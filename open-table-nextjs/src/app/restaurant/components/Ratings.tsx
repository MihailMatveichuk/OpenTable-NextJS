import { Review } from "@prisma/client";
import React from "react";
import { calculatReviewRating } from "../../../../utils/calculatReviewRating";

const Ratings = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className='flex items-end gap-33'>
      <div className='ratings mt-2 flex items-center gap-3'>
        <p>*****</p>
        <p className='text-reg '>{calculatReviewRating(reviews).toFixed(1)}</p>
      </div>
      <div>
        <p className='text-reg'>
          {reviews.length} Review{reviews.length == 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
};

export default Ratings;
