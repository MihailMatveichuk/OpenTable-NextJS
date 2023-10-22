import { Review } from "@prisma/client";
import React from "react";
import { calculatReviewRating } from "../../../../utils/calculatReviewRating";
import Stars from "@/app/components/Stars";

const Ratings = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className='flex items-end gap-3'>
      <div className='ratings mt-2 flex items-center gap-3'>
        <Stars reviews={reviews} />
        <p className='text-reg '>{calculatReviewRating(reviews).toFixed(1)}</p>
      </div>
      <div>
        <p className='text-reg ml-2'>
          {reviews.length} Review{reviews.length == 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
};

export default Ratings;
