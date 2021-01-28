import {useContext} from 'react';
import {GlobalContext} from '../context/Provider';
import HostInfo from './HostInfo';

const ServerInfo = ({server: {name, address, hosts}}) => {
  const {
    server: {deleteServer},
    modal: {toggleAddHostModal},
    host: {setServerName},
  } = useContext(GlobalContext);

  return (
    <>
      <div className='sectionTitle purple'>Server Info</div>
      <div className='info'>
        <div>
          <i className='ri-server-fill'></i>
          {name}
        </div>
        <div>
          <i className='ri-link'></i>
          {address}
        </div>
        {/* TODO: will style later */}
        <button onClick={() => deleteServer({name, address})}>Delete</button>
        <button
          style={{marginLeft: '5px'}}
          onClick={() => {
            setServerName(name);
            toggleAddHostModal();
          }}>
          Add Host
        </button>
      </div>
      <div className='sectionTitle purple subtitle'>Hosts</div>
      {hosts.map(host => (
        <HostInfo host={host} />
      ))}
    </>
  );
};

export default ServerInfo;
