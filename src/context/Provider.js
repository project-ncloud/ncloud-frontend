import {createContext} from 'react';
import HostState from './Host/hostStates';
import ModalState from './Modals/Modalstate';
import ServerState from './server/serverStates';
import UserState from './User/userStates';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const values = {
    server: ServerState(),
    modal: ModalState(),
    host: HostState(),
    user: UserState(),
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
