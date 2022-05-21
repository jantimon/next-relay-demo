import { NextPageContext } from "next";
import { Suspense } from "react";
import { PreloadedQuery } from "react-relay";
import { graphql, usePreloadedQuery } from "react-relay/hooks";
import { getPreloadedQuery } from "../../data/network";
import { ProductReviews } from "../../src/components/ProductReviews";
import preloadQuery, {
  ProductId_Query,
} from "../../__generated__/ProductId_Query.graphql";

interface ProductProps {
  queryRefs: {
    query: PreloadedQuery<ProductId_Query>;
  };
}
const Product = (props: ProductProps) => {
  const data = usePreloadedQuery(
    graphql`
      query ProductId_Query($id: ID!) {
        node(id: $id) {
          id
          ... on Products {
            id
            name
            ...ProductReviews_product @arguments
          }
        }
      }
    `,
    props.queryRefs.query
  );

  return (
    <main>
      <h1>Detail: {data.node?.name}</h1>
      <Suspense fallback={(<p>Loading...</p>)}>
        <ProductReviews product={data.node!} />
      </Suspense>
    </main>
  );
};

Product.getInitialProps = async (ctx: NextPageContext) => {
  return {
    preloadedQueries: {
      query: await getPreloadedQuery(preloadQuery, {
        id: ctx.query.productId

      }),
    },
  };
};

export default Product;
