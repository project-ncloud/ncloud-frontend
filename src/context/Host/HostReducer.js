import {ADD_HOST, SET_SERVER_NAME} from '../types';

const hostReducer = (state, action) => {
  switch (action.type) {
    case ADD_HOST:
      return {...state, hosts: [...state.hosts, action.payload]};

    case SET_SERVER_NAME:
      return {...state, temp_Servername: action.payload};

    default:
      return state;
  }
};

export default hostReducer;
