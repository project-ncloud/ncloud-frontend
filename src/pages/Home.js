import {useContext} from 'react';
import {Route} from 'react-router-dom';
import {Dashboard} from '../components/Dashboard';
import {SideBar} from '../components/SideBar';
import {GlobalContext} from '../context/Provider';
import {Servers} from './Servers';

const Home = () => {
  const {
    user: {
      state: {isAdmin},
    },
  } = useContext(GlobalContext);
  return (
    <>
      <SideBar />
      <main className='container'>
        <Dashboard />
        {/* {isAdmin && <Route path='/dashboard' component={Dashboard} />} */}
        <Servers />
      </main>
    </>
  );
};

export default Home;
