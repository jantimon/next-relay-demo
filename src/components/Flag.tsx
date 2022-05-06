import { graphql, useFragment } from "react-relay/hooks";
import { Flag_icon$key } from "../../__generated__/Flag_icon.graphql";

interface FlagProps {
  country: Flag_icon$key;
  height?: number;
}
export const Flag = ({ country, height = 256 }: FlagProps) => {
  const { name, code } = useFragment(
    graphql`
      fragment Flag_icon on Country {
        name
        code
      }
    `,
    country
  );
  return (
    <img
      src={`https://raw.githubusercontent.com/emcrisostomo/flags/master/svg/${code}.svg`}
      alt={`Flag of ${name}`}
      height={height}
    />
  );
};
