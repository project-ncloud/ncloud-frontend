import axios from 'axios';
import {useReducer} from 'react';
import {addToLocalStorage, NCLOUD_TOKEN} from '../../utils';
import {LOGIN, LOGIN_ADMIN, GET_USER} from '../types';
import userReducer from './UserReducer';

const UserState = () => {
  const initialState = {
    // TODO: change this to false
    admin: false,
    manager: false,
    error: null,
    success: false,
    loading: true,
    // username: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = async data => {
    try {
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
        dispatch({type: LOGIN, payload: res.data});
        addToLocalStorage({key: NCLOUD_TOKEN, value: res.data.access_token});
      } else {
        // dispatch({type: LOGIN_ERROR, payload: 'Failed to login'})
        console.error('Failed to login');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const register = data => {};

  const getUserInfo = async () => {
    if (localStorage.getItem(NCLOUD_TOKEN)) {
      const res = await axios.get('/user/', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(NCLOUD_TOKEN)}`,
        },
      });
      if (res.status === 200) {
        dispatch({type: GET_USER, payload: res.data});
      }
    }
  };

  return {
    state,
    login,
    register,
    getUserInfo,
  };
};

export default UserState;
