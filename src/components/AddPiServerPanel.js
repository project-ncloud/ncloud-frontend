import {useState} from 'react';

export const AddPiServerPanel = () => {
  const [serverName, setServerName] = useState('');
  const [serverAddress, setServerAddress] = useState('');
  const [checked, setChecked] = useState(true);

  function addServer() {
    console.log(serverName, serverAddress, checked);
  }

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
          <button onClick={addServer}>Add Server</button>
        </div>
        <div className='row addServerRow'></div>
      </div>
    </>
  );
};
