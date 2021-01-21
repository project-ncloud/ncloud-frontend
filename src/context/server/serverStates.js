import {useReducer} from 'react';
import serverReducer from './serverReducer';
import {ADD_SERVER, REMOVE_SERVER} from '../types';
// import axios from 'axios';

const ServerState = () => {
  const initialState = {
    servers: [{name: 'Server1', address: '192.168.0.1', auto_start: false}],
  };

  const [state, dispatch] = useReducer(serverReducer, initialState);

  const addServer = async data => {
    try {
      // const res = await axios.post('http://127.0.0.1:5000/server/', data);
      dispatch({type: ADD_SERVER, payload: data});
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
  };
};
export default ServerState;
