import {ADD_HOST} from '../types';

const hostReducer = (state, action) => {
  switch (action.type) {
    case ADD_HOST:
      // TODO: complete adding host
      return {...state};

    default:
      return state;
  }
};

export default hostReducer;
