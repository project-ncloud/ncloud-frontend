export const Dashboard = ({
  setConfirmPowerModal,
  setShowUserSettingsModal,
  setShowPendingUserListModal,
}) => {
  return (
    <main className='container'>
      <section className='dashboard' id='dashboard'>
        <div className='sectionTitle purple'>Dashboard</div>
        <div className='grid'>
          <div className='box' onClick={() => setConfirmPowerModal(x => !x)}>
            <i id='powerON' className='ri-shut-down-line cyan'></i>
            <i id='powerOFF' className='ri-shut-down-line red hide'></i>
          </div>
          <div
            className='box bigbox'
            onClick={() => setShowUserSettingsModal(x => !x)}>
            <i className='ri-user-settings-fill yellow'></i>
            <p className='yellow'>User Settings</p>
          </div>
          <div
            className='box bigbox'
            onClick={() => setShowPendingUserListModal(x => !x)}>
            <i className='ri-user-add-fill red'></i>
            <p className='red'>Pending Requests</p>
            <p className='count'>69</p>
          </div>
        </div>
      </section>
      <section className='server' id='serverName'>
        <div className='sectionTitle purple'>Server Info</div>
        <div className='info'>
          <div>
            <i className='ri-server-fill'></i>PiMagi
          </div>
          <div>
            <i className='ri-link'></i>192.168.0.1
          </div>
        </div>
        <div className='sectionTitle purple subtitle'>Hosts</div>
        <div className='hostgrid'>
          <div className='info hostinfo'>
            <div style={{padding: 0, height: '5px'}}></div>
            <div>
              <i className='ri-hard-drive-fill'></i>Botai Pi 1
            </div>
            <div>
              <i className='ri-folder-info-line'></i>/pi/desktop/
            </div>
            <div className='hostOptions'>
              <i className='ri-settings-3-fill'></i>
              <i className='ri-user-add-fill'></i>
              <i className='ri-user-settings-fill'></i>
            </div>
            <div style={{padding: 0, height: '5px'}}></div>
          </div>
          <div className='info hostinfo hostAdd'>
            <i className='ri-add-fill purple'></i>
          </div>
        </div>
      </section>
    </main>
  );
};
