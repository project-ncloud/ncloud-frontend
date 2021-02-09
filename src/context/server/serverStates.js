import axios from 'axios';
import {useReducer} from 'react';
import {ADD_SERVER, DELETE_SERVER, GET_SERVERS, TOGGLE_POWER} from '../types';
import serverReducer from './serverReducer';

const ServerState = () => {
  const initialState = {
    is_running: null,
    powerToggleStatus: null,
    servers: [
      // {
      //   name: 'fake_server',
      //   address: '192.168.0.1',
      //   auto_start: false,
      //   hosts: [
      //     {
      //       name: 'fake_host',
      //       path: '/home/fake_user/host_dir',
      //       writable: true,
      //       public: false,
      //       server_name: 'Server1',
      //     },
      //   ],
      // },
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

  const addHostToServer = async data => {
    const res = await axios.post('/server/host/', data);
    if (res.data.status) {
      //res.data.status
      getServers();
      // dispatch({type: ADD_HOST_TO_SERVER, payload: data});
      return;
    }
    console.error('Could not add host!');
  };

  const getServers = async () => {
    try {
      const {data} = await axios.get('/servers/');
      console.log(data);
      dispatch({type: GET_SERVERS, payload: data});
    } catch (err) {
      console.error(err);
    }
  };

  const deleteHost = async data => {
    console.log(data);
    const res = await axios.delete('/server/host/', {data});
    if (res.data.status) {
      getServers();
      return;
    }
    console.error('Could not delete host');
  };

  const deleteServer = async data => {
    const res = await axios.delete('/server/', {
      data,
    });

    if (res.data.status) {
      dispatch({type: DELETE_SERVER, payload: data});
      return;
    }

    console.error('Failed to delete server!');
  };

  const togglePower = async (address, action) => {
    const res = await axios.post('/server/control/', {
      address,
      action,
    });
    if (res.data.status) {
      dispatch({type: TOGGLE_POWER, payload: res.data.status});
      return;
    }
    dispatch({type: TOGGLE_POWER, payload: res.data.status});
  };

  const getServerStatus = async address => {
    const {data} = await axios.get(`/server/control/${address}`);
    return data;
  };

  return {
    state,
    addServer,
    deleteServer,
    getServers,
    addHostToServer,
    deleteHost,
    getServerStatus,
    togglePower,
  };
};
export default ServerState;
