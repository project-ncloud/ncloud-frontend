import axios from 'axios';
import {useReducer} from 'react';
import {ADD_HOST, SET_SERVER_NAME} from '../types';
import hostReducer from './HostReducer';

const HostState = () => {
  const initialState = {
    temp_Servername: null,
    hosts: [
      {
        name: 'fake_host',
        path: '/home/fake_user/host_dir',
        writable: true,
        public: false,
        server_name: 'Server1',
      },
    ],
  };

  const [state, dispatch] = useReducer(hostReducer, initialState);

  const addHost = async data => {
    const res = await axios.post('/server/host/', data);
    if (res.data.status) {
      dispatch({type: ADD_HOST, payload: data});
      return;
    }
    console.error('Could no add host!');
  };

  // Seting server name before adding host
  const setServerName = serverName =>
    dispatch({type: SET_SERVER_NAME, payload: serverName});

  return {
    state,
    addHost,
    setServerName,
  };
};

export default HostState;
