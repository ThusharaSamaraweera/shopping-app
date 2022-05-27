import { useSelector } from 'react-redux';

const PublicGuards = (props) => {
  const {children} = props;
  const authUser = useSelector((state) => state.authUser.authUser)

  if(Object.keys(authUser).length === 0){
    return null;
  }
  return children
}

export default PublicGuards;