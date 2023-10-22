import { Review } from "@prisma/client";

export const calculatReviewRating = (reviews: Review[]) => {
  if (reviews.length > 0) {
    return reviews.reduce((sum, next) => sum + next.rating, 0) / reviews.length;
  }
  return 0;
};
