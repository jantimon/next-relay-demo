import { NextPageContext } from "next";
import Link from "next/link";
import { PreloadedQuery } from "react-relay";
import { graphql, usePreloadedQuery } from "react-relay/hooks";
import { getPreloadedQuery } from "../../data/network";
import { Flag } from "../../src/components/Flag";
import preloadQuery, { ContinentCode_Query } from "../../__generated__/ContinentCode_Query.graphql";

interface ContinentProps {
  queryRefs: {
    query: PreloadedQuery<ContinentCode_Query>;
  };
}

const query = graphql`
  query ContinentCode_Query($continentCode: ID!) {
    continent(code: $continentCode) @required(action: NONE) {
      name
      countries {
        code,
        ...Flag_icon
      }
    }
  }
`;

const Country = (props: ContinentProps) => {
  const data = usePreloadedQuery(query, props.queryRefs.query);

  if (!data) {
    return <main><h1>Unknown continent</h1></main>
  }

  return (
      <main>
        <h1>{data.continent.name}</h1>
        {data.continent.countries.map((country) => (        
        <Link href={`/country/${country.code}`} key={country.code}>
            <a>
         <Flag  country={country} height={64} /></a>
          </Link>
        ))}
      </main>
  );
};

export default Country;

Country.getInitialProps = async (ctx: NextPageContext) => {
  return {
    preloadedQueries: {
      query: await getPreloadedQuery(preloadQuery, {
        continentCode: ctx.query.continentCode,
      }),
    },
  };
};
