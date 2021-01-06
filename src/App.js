import {useState} from 'react';
import {AddPiServerPanel} from './components/AddPiServerPanel';
import {ConfirmPower} from './components/ConfirmPower';
import {Console} from './components/Console';
import {Dashboard} from './components/Dashboard';
import {Modal} from './components/Modal';
import {PendingUsers} from './components/PendingUsers';
import {SideBar} from './components/SideBar';
import {UserSettingsPanel} from './components/UserSettingsPanel';

function App() {
  const [showConsole, setShowConsole] = useState(false);
  const [showAddPiModal, setShowAddPiModal] = useState(false);
  const [confirmPowerModal, setConfirmPowerModal] = useState(false);
  const [showUserSettingsModal, setShowUserSettingsModal] = useState(false);
  const [showPendingUserListModal, setShowPendingUserListModal] = useState(
    false
  );

  return (
    <>
      <SideBar
        setShowConsole={setShowConsole}
        setShowAddPiModal={setShowAddPiModal}
      />
      <Dashboard
        setConfirmPowerModal={setConfirmPowerModal}
        setShowUserSettingsModal={setShowUserSettingsModal}
        setShowPendingUserListModal={setShowPendingUserListModal}
      />
      {showConsole && <Console showConsole={showConsole} />}
      {showAddPiModal && (
        <Modal action={setShowAddPiModal} panel={<AddPiServerPanel />} />
      )}
      {confirmPowerModal && (
        <Modal action={setConfirmPowerModal} panel={<ConfirmPower />} />
      )}
      {showUserSettingsModal && (
        <Modal
          action={setShowUserSettingsModal}
          panel={<UserSettingsPanel />}
        />
      )}
      {showPendingUserListModal && (
        <Modal action={setShowPendingUserListModal} panel={<PendingUsers />} />
      )}
    </>
  );
}

export default App;
