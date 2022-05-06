import { NextPageContext } from "next";
import { PreloadedQuery } from "react-relay";
import { graphql, usePreloadedQuery } from "react-relay/hooks";
import { getPreloadedQuery } from "../../data/network";
import { Flag } from "../../src/components/Flag";
import preloadQuery, {
  CountryCode_Query,
} from "../../__generated__/CountryCode_Query.graphql";

interface CountryProps {
  queryRefs: {
    query: PreloadedQuery<CountryCode_Query>;
  };
}
const Country = (props: CountryProps) => {
  const data = usePreloadedQuery(
    graphql`
      query CountryCode_Query($countryCode: ID!) {
        country(code: $countryCode) @required(action: NONE) {
          name
          ...Flag_icon
        }
      }
    `,
    props.queryRefs.query
  );

  if (!data) {
    return (
      <main>
        <h1>Unknown country</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>{data.country.name}</h1>
      <Flag country={data.country} />
    </main>
  );
};

Country.getInitialProps = async (ctx: NextPageContext) => {
  return {
    preloadedQueries: {
      query: await getPreloadedQuery(preloadQuery, {
        countryCode: ctx.query.countryCode,
      }),
    },
  };
};

export default Country;
