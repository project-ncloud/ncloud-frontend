import {useContext} from 'react';
import {Dashboard} from '../components/Dashboard';
import {SideBar} from '../components/SideBar';
import {GlobalContext} from '../context/Provider';
import {Servers} from './Servers';
import {useHistory, Redirect} from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const {
    user: {
      state: {manager, admin, loading},
    },
  } = useContext(GlobalContext);

  if (loading) return <h1>Loading...</h1>;

  if (!loading) {
    if (!manager && !admin) {
      // history.push('/user');
      return <Redirect to='/user' />;
    }
  }

  return (
    <>
      <SideBar />
      <main className='container'>
        <Dashboard />
        <Servers />
      </main>
    </>
  );
};

export default Home;
