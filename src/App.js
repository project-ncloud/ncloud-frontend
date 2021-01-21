import {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AddPiServerPanel} from './components/AddPiServerPanel';
import {Console} from './components/Console';
import {Dialog} from './components/Dialog';
import {Modal} from './components/Modal';
import {PendingUsers} from './components/PendingUsers';
import {UserSettingsPanel} from './components/UserSettingsPanel';
import {GlobalContext} from './context/Provider';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const {modal} = useContext(GlobalContext);
  const {
    toggleAddPiModal,
    toggleConfirmPowerModal,
    toggleUserSettingsModal,
    togglePendingUserListModal,
    state: {
      showAddPiModal,
      showConfirmPowerModal,
      showUserSettingsModal,
      showPendingUserListModal,
    },
  } = modal;

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>

      <Console />
      <Modal
        action={toggleAddPiModal}
        show={showAddPiModal}
        panel={<AddPiServerPanel />}
      />
      <Dialog
        show={showConfirmPowerModal}
        message='This will turn off the PIs'
        onClose={() => toggleConfirmPowerModal()}
      />
      <Modal
        action={toggleUserSettingsModal}
        show={showUserSettingsModal}
        panel={<UserSettingsPanel />}
      />
      <Modal
        action={togglePendingUserListModal}
        show={showPendingUserListModal}
        panel={<PendingUsers />}
      />
    </>
  );
}

export default App;
