import { graphql, useFragment } from "react-relay";
import { ProductReview_review$key } from "../../__generated__/ProductReview_review.graphql";
import { ProductLink } from "./ProductLink";
import { ProductReviewComments } from "./ProductReviewComments";
import { UserName } from "./UserName";

interface ProductReviewProps {
  review: ProductReview_review$key,
}
export const ProductReview = (props: ProductReviewProps) => {
  const review = useFragment(
    graphql`
      fragment ProductReview_review on ProductReviews {
        id
        score
        title
        text
        User {
          ...UserName_user
        }
        Product {
          ...ProductLink_product
        }
        ...ProductReviewComments_product @arguments
      }
    `,
    props.review
  );
  
  return (
    <>
      <h2>{review.title} (<UserName user={review.User}/>)</h2>
      <p>Score: {review.score}</p>
      <p>{review.text}</p>
      {/* Why habe a product link here... because we can 😜 */}
      <p>Product: <ProductLink product={review.Product}/></p>
      <hr></hr>
      <h3>Comments</h3>
      <ProductReviewComments review={review} />
    </>
  )
}