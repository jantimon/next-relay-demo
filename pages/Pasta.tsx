import { PreloadedQuery } from "react-relay";
import { graphql, usePreloadedQuery } from "react-relay/hooks";
import { getPreloadedQuery } from "../data/network";
import { Flag } from "../src/components/Flag";
import PastaQuery, { Pasta_Query } from "../__generated__/Pasta_Query.graphql";

interface ProductProps {
  queryRefs: {
    query: PreloadedQuery<Pasta_Query>;
  };
}

const query = graphql`
  query Pasta_Query($countryCode: ID!) {
    country(code: $countryCode) @required(action: THROW) {
      name
      ...Flag_icon
    }
  }
`;

const Pasta = (props: ProductProps) => {
  const data = usePreloadedQuery(query, props.queryRefs.query);
  return (
    <main>
      <h1>{data.country.name}</h1>
      <Flag country={data.country} />
    </main>
  );
};

export async function getStaticProps() {
  return {
    props: {
      preloadedQueries: {
        query: await getPreloadedQuery(PastaQuery, {
          countryCode: "IT",
        }),
      },
    },
  };
}

export default Pasta;
