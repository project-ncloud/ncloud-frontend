import {useReducer} from 'react';
import {ADD_HOST} from '../types';
import hostReducer from './HostReducer';

const HostState = () => {
  const initialState = {
    hosts: [
      {
        name: 'Host 1',
        path: '/home/user/host_dir',
        writable: true,
        public: false,
        server_name: 'Server1',
      },
    ],
  };

  const [state, dispatch] = useReducer(hostReducer, initialState);

  const addHost = data => dispatch({type: ADD_HOST, payload: data});

  return {
    state,
    addHost,
  };
};

export default HostState;
