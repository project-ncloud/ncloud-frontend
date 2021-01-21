import {useReducer} from 'react';
import modalReducer from './modalReducer';
import {
  TOGGLE_ADD_PI_MODAL,
  TOGGLE_CONFIRM_POWER_MODAL,
  TOGGLE_CONSOLE,
  TOGGLE_PENDING_USER_LIST_MODAL,
  TOGGLE_USER_SETTINGS_MODAL,
} from '../types';

const ModalState = () => {
  const initialState = {
    showConsole: false,
    showAddPiModal: false,
    showConfirmPowerModal: false,
    showUserSettingsModal: false,
    showPendingUserListModal: false,
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  const toggleConsole = () => dispatch({type: TOGGLE_CONSOLE});
  const toggleAddPiModal = () => dispatch({type: TOGGLE_ADD_PI_MODAL});
  const toggleConfirmPowerModal = () =>
    dispatch({type: TOGGLE_CONFIRM_POWER_MODAL});
  const toggleUserSettingsModal = () =>
    dispatch({type: TOGGLE_USER_SETTINGS_MODAL});
  const togglePendingUserListModal = () =>
    dispatch({type: TOGGLE_PENDING_USER_LIST_MODAL});

  return {
    state,
    toggleConsole,
    toggleAddPiModal,
    toggleConfirmPowerModal,
    toggleUserSettingsModal,
    togglePendingUserListModal,
  };
};
export default ModalState;
