import { useSelector } from "react-redux";

const GuestComponent = (props) => {
  const { children } = props;
  const authUser = useSelector((state) => state.authUser.authUser);

  if (Object.keys(authUser).length === 0) {
    return children;
  }
  return null;
};

export default GuestComponent;
