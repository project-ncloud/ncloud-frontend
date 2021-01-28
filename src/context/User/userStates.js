import axios from 'axios';
import {useReducer} from 'react';
import {addToLocalStorage, NCLOUD_TOKEN} from '../../utils';
import {LOGIN, LOGIN_ADMIN} from '../types';
import userReducer from './UserReducer';

const UserState = () => {
  const initialState = {
    isAdmin: true,
    error: null,
    success: false,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = async data => {
    if (data.username.toLowerCase() === 'admin') {
      const res = await axios.post('/admin/', data);
      if (res.data.status) {
        dispatch({type: LOGIN_ADMIN});
        addToLocalStorage({key: NCLOUD_TOKEN, value: res.data.access_token});
      } else {
        // dispatch({type: LOGIN_ERROR, payload: 'Failed to login as Admin'})
        console.error('Failed to login as Admin');
      }
      return;
    }

    const res = await axios.post('/login/', data);
    if (res.data.status) {
      dispatch({type: LOGIN});
      addToLocalStorage({key: NCLOUD_TOKEN, value: res.data.access_token});
    } else {
      // dispatch({type: LOGIN_ERROR, payload: 'Failed to login'})
      console.error('Failed to login');
    }
  };

  const register = data => {};

  return {
    state,
    login,
    register,
  };
};

export default UserState;
