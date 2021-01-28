import axios from 'axios';
import {useReducer} from 'react';
import {ADD_SERVER, GET_SERVERS, REMOVE_SERVER} from '../types';
import serverReducer from './serverReducer';

const ServerState = () => {
  const initialState = {
    servers: [
      {
        name: 'fake_server',
        address: '192.168.0.1',
        auto_start: false,
        hosts: [
          {
            name: 'fake_host',
            path: '/home/fake_user/host_dir',
            writable: true,
            public: false,
            server_name: 'Server1',
          },
          {
            name: 'fake_host 2',
            path: '/home/fake_user2/host_dir',
            writable: true,
            public: false,
            server_name: 'Server1',
          },
        ],
      },
    ],
    serverErrors: [
      // {
      //   error: "Could not add server",
      // },
    ],
  };

  const [state, dispatch] = useReducer(serverReducer, initialState);

  const addServer = async data => {
    try {
      const res = await axios.post(`/server/`, data);
      if (res.data.status) {
        dispatch({type: ADD_SERVER, payload: data});
        return;
      }
      console.error('Something went wrong!!');
      // dispatch({
      //   type: SERVER_ERROR,
      //   payload: { error: "Could not add server" },
      // });
    } catch (err) {
      console.error(err);
    }
  };

  const getServers = async () => {
    try {
      const {data} = await axios.get('/servers/');
      dispatch({type: GET_SERVERS, payload: data});
    } catch (err) {
      console.error(err);
    }
  };

  const deleteServer = async data => {
    // TODO: add delete request
    dispatch({type: REMOVE_SERVER, payload: data});
  };

  return {
    state,
    addServer,
    deleteServer,
    getServers,
  };
};
export default ServerState;
