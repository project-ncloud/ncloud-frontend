const HostInfo = ({host: {name, path}}) => {
  return (
    <>
      <div className='hostgrid'>
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
        </div>
      </div>
    </>
  );
};

export default HostInfo;
