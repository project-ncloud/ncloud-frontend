export const AddPiServerPanel = () => (
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
        <input type='text' name='addServerName' id='addServerName' />
      </div>

      <div className='row addServerRow'></div>

      <div className='row addServerRow'>
        <label htmlFor='addServerAddress'>Address</label>
      </div>
      <div className='row addServerRow'>
        <input type='text' name='addServerAddress' id='addServerAddress' />
      </div>

      <div className='row addServerRow'></div>

      <div className='row addServerRow'>Configurations</div>
      <div className='row addServerRow'>
        <input type='checkbox' name='addAutoStart' id='addAutoStart' />
        <label htmlFor='addAutoStart'>Auto Start</label>
      </div>

      <div className='row addServerRow' id='addServerStatus'></div>
      <div className='row addServerRow buttonRow'>
        <button className='subBg purple'>Clear</button>
        <button>Add Server</button>
      </div>
      <div className='row addServerRow'></div>
    </div>
  </>
);
