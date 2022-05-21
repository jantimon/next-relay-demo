import Link from "next/link"
import { graphql, useFragment } from "react-relay";
import { ProductLink_product$key } from "../../__generated__/ProductLink_product.graphql";

interface ProductLinkProps {
  product: ProductLink_product$key,
}
export const ProductLink = (props: ProductLinkProps) => {
  const data = useFragment(
    graphql`
      fragment ProductLink_product on Products {
        id
        name
      }
    `,
    props.product
  );

  return (
    <Link href={`/product/${data.id}`}>
      <a>{data.name}</a>
    </Link>
  )
}