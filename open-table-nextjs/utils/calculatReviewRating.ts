import { Review } from '@prisma/client/edge';

export const calculatReviewRating = (reviews: Review[]) => {
  if (!reviews.length) return 0;
  return reviews.reduce((sum, next) => sum + next.rating, 0) / reviews.length;
};
