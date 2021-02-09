import {GET_USER, LOGIN, LOGIN_ADMIN} from '../types';

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        admin: false,
        success: true,
        manager: action.payload.manager,
        loading: false,
      };

    case LOGIN_ADMIN:
      return {...state, admin: true, success: true, loading: false};

    case GET_USER:
      const {admin, manager} = action.payload;
      return {...state, admin, manager, loading: false};

    default:
      return state;
  }
};

export default userReducer;
