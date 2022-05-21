// import { useEffect, useState } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { ProductReviewCommentsPaginationQuery } from "../../__generated__/ProductReviewCommentsPaginationQuery.graphql";
import { ProductReviewComments_product$key } from "../../__generated__/ProductReviewComments_product.graphql";
import { ProductReviewComment } from "./ProductReviewComment";

interface ProductReviewCommentsProps {
  review: ProductReviewComments_product$key,
}
export const ProductReviewComments = (props: ProductReviewCommentsProps) => {
  // const [sort, setSort] = useState("asc");
  // Order By can't be implemented, since hasura doesn't seem to support it.
  // I've tried executing the Queryin in GraphiQL, and I also get an error.
  const { data, loadNext, hasNext, isLoadingNext, refetch } = usePaginationFragment<ProductReviewCommentsPaginationQuery, ProductReviewComments_product$key>(
    graphql`
      fragment ProductReviewComments_product on ProductReviews 
        @argumentDefinitions(
          first: {type: "Int", defaultValue: 2},
          after: {type: "String", defaultValue: null},
          # sortr: {type: "order_by", defaultValue: asc},
        ) 
        @refetchable(queryName: "ProductReviewCommentsPaginationQuery") {
        ProductReviewComments_connection(first: $first, after: $after)
          @connection(key: "ProductReviewComments_product_ProductReviewComments_connection") {
          edges {
            cursor
            node {
              ...ProductReviewComment_review
            }
          }
        }
      }
    `,
    props.review
  );

  // useEffect(() => {
  //   refetch({
  //     sort: sort as any
  //   })
  // }, [sort, refetch])
  
  return (
    <>
      {/* <select onInput={(e) => setSort(e.target.value)}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select> */}
      <ul>
        {data.ProductReviewComments_connection.edges.map(edge => (
          <li key={edge.cursor}>
            <ProductReviewComment comment={edge.node} />
          </li>
        ))}
      </ul>
      {hasNext ? <button onClick={() => loadNext(2)}>
        {isLoadingNext ? "loading..." : null}
        Load More comments
      </button> : null}
    </>
  )
}