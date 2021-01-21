import {useContext} from 'react';
import {Route} from 'react-router-dom';
import HostInfo from '../components/HostInfo';
import ServerInfo from '../components/ServerInfo';
import {GlobalContext} from '../context/Provider';

export const Servers = () => {
  const {
    server: {
      state: {servers},
    },
    host: {
      state: {hosts},
    },
  } = useContext(GlobalContext);

  return (
    <section className='server' id='serverName'>
      {servers.map(server => (
        <Route exact key={server.name} path={`/${server.name}`}>
          <ServerInfo server={server} />
        </Route>
      ))}

      {hosts.map(host => (
        <Route exact key={host.name} path={`/${host.name}`}>
          <HostInfo host={host} />
        </Route>
      ))}
    </section>
  );
};
