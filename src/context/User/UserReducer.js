import {LOGIN, LOGIN_ADMIN} from '../types';

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, isAdmin: false, success: true};

    case LOGIN_ADMIN:
      return {...state, isAdmin: true, success: true};

    default:
      return state;
  }
};

export default userReducer;
