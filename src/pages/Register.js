import {useState} from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <div className='login__container'>
      <h2>Register</h2>
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
        <button type='submit'>Register</button>
      </form>

      <div className='links'>
        <Link to='/login'>Login</Link>
        <Link to='/admin'>Admin</Link>
      </div>
    </div>
  );
};

export default Register;
