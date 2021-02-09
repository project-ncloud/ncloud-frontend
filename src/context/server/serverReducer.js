import {
  ADD_HOST_TO_SERVER,
  ADD_SERVER,
  GET_SERVERS,
  DELETE_SERVER,
  SERVER_ERROR,
  DELETE_HOST,
  TOGGLE_POWER,
} from '../types';

const serverReducer = (state, action) => {
  switch (action.type) {
    case ADD_SERVER:
      return {...state, servers: [...state.servers, action.payload]};

    case GET_SERVERS:
      return {...state, servers: action.payload};

    case DELETE_HOST:
      return {...state};

    case ADD_HOST_TO_SERVER:
      console.log(
        state.servers.filter(s => s.name === action.payload.server_name)
      );
      return {
        ...state,
        servers: [
          ...state.servers.filter(s => s.name === action.payload.server_name),
        ],
      };

    case SERVER_ERROR:
      return {
        ...state,
        serverErrors: [...state.serverErrors, action.payload],
      };

    case DELETE_SERVER:
      return {
        ...state,
        servers: state.servers.filter(
          server => server.address !== action.payload.address
        ),
      };

    case TOGGLE_POWER:
      return {...state, powerToggleStatus: action.payload};

    default:
      return state;
  }
};

export default serverReducer;
