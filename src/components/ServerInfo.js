import {useContext} from 'react';
import {GlobalContext} from '../context/Provider';

const ServerInfo = ({server: {name, address}}) => {
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
          onClick={() => {
            setServerName(name);
            toggleAddHostModal();
          }}>
          Add Host
        </button>
      </div>
    </>
  );
};

export default ServerInfo;
