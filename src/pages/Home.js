import {Dashboard} from '../components/Dashboard';
import {SideBar} from '../components/SideBar';
import {Servers} from './Servers';

const Home = () => {
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
