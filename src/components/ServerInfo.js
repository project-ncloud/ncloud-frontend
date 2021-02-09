import {useContext} from 'react';
import {GlobalContext} from '../context/Provider';
import HostInfo from './HostInfo';
import {useHistory} from 'react-router-dom';

const ServerInfo = ({server: {name, address, hosts}}) => {
  const {
    server: {deleteServer},
    modal: {toggleAddHostModal},
    host: {setServerName},
  } = useContext(GlobalContext);
  const history = useHistory();

  function handleDelete() {
    deleteServer({name, address});
    history.push('/');
  }

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
        <button onClick={handleDelete}>
          <i className='ri-delete-bin-line'></i>
        </button>
      </div>
      <div className='sectionTitle purple subtitle'>Hosts</div>
      <div className='hostgrid'>
        {hosts.map(host => (
          <HostInfo key={host.name} server_name={name} host={host} />
        ))}
        <div
          className='info hostinfo hostAdd'
          onClick={() => {
            setServerName(name);
            toggleAddHostModal();
          }}>
          <i className='ri-add-fill purple'></i>
        </div>
      </div>
    </>
  );
};

export default ServerInfo;
