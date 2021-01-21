import {useContext, useState} from 'react';
import {GlobalContext} from '../context/Provider';

export const AddPiServerPanel = () => {
  const {
    server: {addServer},
    modal: {toggleAddPiModal},
  } = useContext(GlobalContext);

  const [serverName, setServerName] = useState('');
  const [serverAddress, setServerAddress] = useState('');
  const [checked, setChecked] = useState(true);

  const addServerHandler = () => {
    if (serverName.trim() && serverAddress.trim()) {
      addServer({
        name: serverName,
        address: serverAddress,
        auto_start: checked,
      });
      toggleAddPiModal();
    }
  };

  return (
    <>
      <div className='actionBar'>
        <div className='confirmHead purple'>Add Server</div>
      </div>
      <div className='list addServer' id='userPendingList'>
        <div className='row addServerRow'></div>

        <div className='row addServerRow'>
          <label htmlFor='addServerName'>Server Name</label>
        </div>
        <div className='row addServerRow'>
          <input
            type='text'
            name='addServerName'
            id='addServerName'
            value={serverName}
            onChange={e => setServerName(e.target.value)}
          />
        </div>

        <div className='row addServerRow'></div>

        <div className='row addServerRow'>
          <label htmlFor='addServerAddress'>Address</label>
        </div>
        <div className='row addServerRow'>
          <input
            type='text'
            name='addServerAddress'
            id='addServerAddress'
            value={serverAddress}
            onChange={e => setServerAddress(e.target.value)}
          />
        </div>

        <div className='row addServerRow'></div>

        <div className='row addServerRow'>Configurations</div>
        <div className='row addServerRow'>
          <input
            type='checkbox'
            name='addAutoStart'
            id='addAutoStart'
            checked={checked}
            onChange={() => setChecked(x => !x)}
          />
          <label htmlFor='addAutoStart'>Auto Start</label>
        </div>

        <div className='row addServerRow' id='addServerStatus'></div>
        <div className='row addServerRow buttonRow'>
          <button className='subBg purple'>Clear</button>
          <button onClick={addServerHandler}>Add Server</button>
        </div>
        <div className='row addServerRow'></div>
      </div>
    </>
  );
};
