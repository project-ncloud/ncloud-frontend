import {useContext, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AddHostPanel} from './components/AddHostPanel';
import {AddPiServerPanel} from './components/AddPiServerPanel';
import {Console} from './components/Console';
import {Dialog} from './components/Dialog';
import {Modal} from './components/Modal';
import {PendingUsers} from './components/PendingUsers';
import {UserSettingsPanel} from './components/UserSettingsPanel';
import {GlobalContext} from './context/Provider';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';

function App() {
  const {
    modal,
    user: {getUserInfo},
  } = useContext(GlobalContext);
  const {
    toggleAddPiModal,
    toggleConfirmPowerModal,
    toggleUserSettingsModal,
    togglePendingUserListModal,
    toggleAddHostModal,
    state: {
      showAddPiModal,
      showAddHostModal,
      showConfirmPowerModal,
      showUserSettingsModal,
      showPendingUserListModal,
    },
  } = modal;

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/user' component={User} />
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
      <Modal
        action={toggleAddHostModal}
        show={showAddHostModal}
        panel={<AddHostPanel />}
      />
    </>
  );
}

export default App;
