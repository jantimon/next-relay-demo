import { graphql, useFragment } from "react-relay";
import { ProductReviewComment_review$key } from "../../__generated__/ProductReviewComment_review.graphql";
import { UserName } from "./UserName";

interface ProductReviewCommentProps {
  comment: ProductReviewComment_review$key,
}
export const ProductReviewComment = (props: ProductReviewCommentProps) => {
  const comment = useFragment(
    graphql`
      fragment ProductReviewComment_review on ProductReviewComments {
        comment
        User {
          ...UserName_user
        }
      }
    `,
    props.comment
  );
  
  return (
    <p>{comment.comment} (<UserName user={comment.User}/>)</p>
  )
}