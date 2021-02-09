import {useContext} from 'react';
import {GlobalContext} from '../context/Provider';
import {useHistory, Redirect} from 'react-router-dom';

const User = () => {
  const history = useHistory();
  const {
    user: {
      state: {manager, admin, loading, username},
    },
  } = useContext(GlobalContext);

  if (!loading) {
    if (admin) {
      // history.push('/user');
      return <Redirect to='/' />;
    }
  }
  return (
    <>
      <h1>USER PAGE</h1>
    </>
  );
};

export default User;
