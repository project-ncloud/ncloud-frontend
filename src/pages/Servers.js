import {useContext} from 'react';
import {Route} from 'react-router-dom';
import ServerInfo from '../components/ServerInfo';
import {GlobalContext} from '../context/Provider';

export const Servers = () => {
  const {
    server: {
      state: {servers},
    },
  } = useContext(GlobalContext);

  return (
    <section className='server' id='serverName'>
      {servers.map(server => (
        <Route exact key={server.name} path={`/server/${server.name}`}>
          <ServerInfo server={server} />
        </Route>
      ))}
    </section>
  );
};
