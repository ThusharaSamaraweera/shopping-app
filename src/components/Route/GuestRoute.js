import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const GuestRoute = (props) => {
  const { children } = props;
  const authUser = useSelector((state) => state.authUser.authUser);

  if (Object.keys(authUser).length === 0) {
    return children;
  }
  return <Redirect to='/' />;
};

export default GuestRoute;
