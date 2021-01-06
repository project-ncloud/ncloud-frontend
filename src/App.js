import {useState} from 'react';
import {AddPiServerPanel} from './components/AddPiServerPanel';
import {Console} from './components/Console';
import {Dashboard} from './components/Dashboard';
import {Dialog} from './components/Dialog';
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
      <Console showConsole={showConsole} />
      <Modal
        action={setShowAddPiModal}
        show={showAddPiModal}
        panel={<AddPiServerPanel />}
      />

      <Dialog
        show={confirmPowerModal}
        message='This will turn off the PIs'
        onClose={() => setConfirmPowerModal(x => !x)}
      />
      <Modal
        action={setShowUserSettingsModal}
        show={showUserSettingsModal}
        panel={<UserSettingsPanel />}
      />
      <Modal
        action={setShowPendingUserListModal}
        show={showPendingUserListModal}
        panel={<PendingUsers />}
      />
    </>
  );
}

export default App;
