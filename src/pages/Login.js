import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../context/Provider';
import '../styles/login.scss';

const Login = () => {
  const {
    user: {login},
  } = useContext(GlobalContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    login({username, password});
  };

  return (
    <div className='login__container'>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>

      <div className='links'>
        <Link to='/register'>Register here</Link>
      </div>
    </div>
  );
};

export default Login;
