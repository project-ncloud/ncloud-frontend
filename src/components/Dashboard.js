import {useContext} from 'react';
import {GlobalContext} from '../context/Provider';

export const Dashboard = () => {
  const {modal} = useContext(GlobalContext);
  const {
    toggleConfirmPowerModal,
    toggleUserSettingsModal,
    togglePendingUserListModal,
  } = modal;

  return (
    <section className='dashboard' id='dashboard'>
      <div className='sectionTitle purple'>Dashboard</div>
      <div className='grid'>
        <div className='box' onClick={() => toggleConfirmPowerModal()}>
          <i id='powerON' className='ri-shut-down-line cyan'></i>
          <i id='powerOFF' className='ri-shut-down-line red hide'></i>
        </div>
        <div className='box bigbox' onClick={() => toggleUserSettingsModal()}>
          <i className='ri-user-settings-fill yellow'></i>
          <p className='yellow'>User Settings</p>
        </div>
        <div
          className='box bigbox'
          onClick={() => togglePendingUserListModal()}>
          <i className='ri-user-add-fill red'></i>
          <p className='red'>Pending Requests</p>
          <p className='count'>69</p>
        </div>
      </div>
    </section>
  );
};
