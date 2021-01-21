import {ADD_SERVER, REMOVE_SERVER} from '../types';

const serverReducer = (state, action) => {
  switch (action.type) {
    case ADD_SERVER:
      return {...state, servers: [...state.servers, action.payload]};

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
