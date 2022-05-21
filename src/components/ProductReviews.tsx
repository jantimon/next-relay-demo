import { useEffect, useState } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { ProductReviewsPaginationQuery } from "../../__generated__/ProductReviewsPaginationQuery.graphql";
import { ProductReviews_product$key } from "../../__generated__/ProductReviews_product.graphql";
import { ProductReview } from "./ProductReview";

interface ProductReviewsProps {
  product: ProductReviews_product$key,
}
export const ProductReviews = (props: ProductReviewsProps) => {
  const [sort, setSort] = useState("asc");
  const { data, loadNext, hasNext, isLoadingNext, refetch } = usePaginationFragment<ProductReviewsPaginationQuery, ProductReviews_product$key>(
    graphql`
      fragment ProductReviews_product on Products 
        @argumentDefinitions(
          first: {type: "Int", defaultValue: 2},
          after: {type: "String", defaultValue: null},
          sort: {type: "order_by", defaultValue: asc},
        ) 
        @refetchable(queryName: "ProductReviewsPaginationQuery") {
        ProductReviews_connection(first: $first, after: $after, order_by: {created_at: $sort})
          @connection(key: "ProductReviews_product_ProductReviews_connection") {
          edges {
            cursor
            node {
              ...ProductReview_review
            }
          }
        }
      }
    `,
    props.product
  );

  useEffect(() => {
    // While refetching, the next uppe Sespense Boundary is displayed
    refetch({
      sort: sort as any
    })
  }, [sort, refetch])
  
  return (
    <>
      <select onInput={(e) => setSort(e.target.value)}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <ul>
        {data.ProductReviews_connection.edges.map(edge => (
          <li key={edge.cursor}>
            <ProductReview review={edge.node} />
          </li>
        ))}
      </ul>
      {hasNext ? <button onClick={() => loadNext(2)}>
        {isLoadingNext ? "loading..." : null}
        Load More reviews
      </button> : null}
    </>

  )
}