import { graphql, useFragment } from "react-relay";
import { UserName_user$key } from "../../__generated__/UserName_user.graphql";

interface UserNameProps {
  user: UserName_user$key,
}
export const UserName = (props: UserNameProps) => {
  const data = useFragment(
    graphql`
      fragment UserName_user on Users {
        id
        name
      }
    `,
    props.user
  );

  return (
    <>Username: {data.name}</>
  )
}