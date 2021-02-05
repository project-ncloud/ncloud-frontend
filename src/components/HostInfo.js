import {useContext} from 'react';
import {GlobalContext} from '../context/Provider';

const HostInfo = ({host: {name, path}, server_name}) => {
  const {
    server: {deleteHost},
  } = useContext(GlobalContext);
  return (
    <>
      <div className='info hostinfo'>
        <div style={{padding: 0, height: '5px'}}></div>
        <div>
          <i className='ri-hard-drive-fill'></i>
          {name}
        </div>
        <div>
          <i className='ri-folder-info-line'></i>
          {path}
        </div>
        <div className='hostOptions'>
          <i className='ri-settings-3-fill'></i>
          <i className='ri-user-add-fill'></i>
          <i className='ri-user-settings-fill'></i>
        </div>
        <div style={{padding: 0, height: '5px'}}></div>

        <button
          onClick={() => {
            deleteHost({name, path, server_name});
          }}>
          <i className='ri-delete-bin-line'></i>
        </button>
      </div>
    </>
  );
};

export default HostInfo;
