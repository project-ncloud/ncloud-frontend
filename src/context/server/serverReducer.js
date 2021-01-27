import {ADD_SERVER, GET_SERVERS, REMOVE_SERVER, SERVER_ERROR} from '../types';

const serverReducer = (state, action) => {
  switch (action.type) {
    case ADD_SERVER:
    case GET_SERVERS:
      return {...state, servers: [...state.servers, ...action.payload]};

    case SERVER_ERROR:
      return {
        ...state,
        serverErrors: [...state.serverErrors, action.payload],
      };

    case REMOVE_SERVER:
      return {
        ...state,
        servers: state.servers.filter(
          server => server.address !== action.payload.address
        ),
      };

    default:
      return state;
  }
};

export default serverReducer;
