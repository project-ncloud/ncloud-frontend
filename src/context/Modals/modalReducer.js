import {
  TOGGLE_ADD_PI_MODAL,
  TOGGLE_CONFIRM_POWER_MODAL,
  TOGGLE_CONSOLE,
  TOGGLE_PENDING_USER_LIST_MODAL,
  TOGGLE_USER_SETTINGS_MODAL,
  TOGGLE_ADD_HOST_MODAL,
} from '../types';

const modalReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CONSOLE:
      return {...state, showConsole: !state.showConsole};

    case TOGGLE_ADD_HOST_MODAL:
      return {...state, showAddHostModal: !state.showAddHostModal};

    case TOGGLE_ADD_PI_MODAL:
      return {...state, showAddPiModal: !state.showAddPiModal};

    case TOGGLE_CONFIRM_POWER_MODAL:
      return {...state, showConfirmPowerModal: !state.showConfirmPowerModal};

    case TOGGLE_USER_SETTINGS_MODAL:
      return {...state, showUserSettingsModal: !state.showUserSettingsModal};

    case TOGGLE_PENDING_USER_LIST_MODAL:
      return {
        ...state,
        showPendingUserListModal: !state.showPendingUserListModal,
      };

    default:
      return state;
  }
};

export default modalReducer;
