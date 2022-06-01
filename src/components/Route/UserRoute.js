import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const UserRoute = (props) => {
  const { children } = props;
  const authUser = useSelector((state) => state.authUser.authUser);

  if (Object.keys(authUser).length === 0) {
    return <Redirect to='/' />;
  }
  return children;
};

export default UserRoute;
