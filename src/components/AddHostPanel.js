import {useContext, useState} from 'react';
import {GlobalContext} from '../context/Provider';

export const AddHostPanel = () => {
  const {
    host: {
      addHost,
      state: {temp_Servername},
    },
    modal: {toggleAddHostModal},
  } = useContext(GlobalContext);

  const [hostName, setHostName] = useState('');
  const [path, setPath] = useState('');
  const [writable, setWritable] = useState(false);
  const [hostPublic, setHostPublic] = useState(false);

  const addHostHandler = () => {
    addHost({
      name: hostName,
      path,
      writable,
      public: hostPublic,
      server_name: temp_Servername,
    });
    toggleAddHostModal();
  };

  return (
    <>
      <div className='actionBar'>
        <div className='confirmHead purple'>Add Host</div>
      </div>
      <div className='list addServer' id='userPendingList'>
        <div className='row addServerRow'></div>

        <div className='row addServerRow'>
          <label htmlFor='host-name'>Host Name</label>
        </div>
        <div className='row addServerRow'>
          <input
            type='text'
            name='host-name'
            id='host-name'
            value={hostName}
            onChange={e => setHostName(e.target.value)}
          />
        </div>

        <div className='row addServerRow'></div>

        <div className='row addServerRow'>
          <label htmlFor='server-address'>Path</label>
        </div>
        <div className='row addServerRow'>
          <input
            type='text'
            name='server-address'
            id='server-address'
            value={path}
            onChange={e => setPath(e.target.value)}
          />
        </div>

        <div className='row addServerRow'></div>

        <div className='row addServerRow'>Configurations</div>
        <div className='row addServerRow'>
          <input
            type='checkbox'
            name='writable'
            id='writable'
            checked={writable}
            onChange={() => setWritable(x => !x)}
          />
          <label htmlFor='writable'>Writable</label>
        </div>

        <div className='row addServerRow'>
          <input
            type='checkbox'
            name='public'
            id='public'
            checked={hostPublic}
            onChange={() => setHostPublic(x => !x)}
          />
          <label htmlFor='public'>Public</label>
        </div>

        <div className='row addServerRow' id='addServerStatus'></div>
        <div className='row addServerRow buttonRow'>
          <button className='subBg purple'>Clear</button>
          <button onClick={addHostHandler}>Add Host</button>
        </div>
        <div className='row addServerRow'></div>
      </div>
    </>
  );
};
