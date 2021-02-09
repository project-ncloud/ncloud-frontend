import {useContext, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../context/Provider';

export const ListElement = ({title, address}) => {
  const {
    server: {
      getServerStatus,
      togglePower,
      state: {powerToggleStatus},
    },
  } = useContext(GlobalContext);

  const [checked, setChecked] = useState(false);

  const getServerStatusRef = useRef(getServerStatus);
  useEffect(() => {
    getServerStatusRef
      .current(address)
      .then(data => setChecked(data.is_running));
  }, [address]);

  const handleTogglePower = () => {
    togglePower(address, !checked);
    if (powerToggleStatus) setChecked(!checked);
  };

  return (
    <div className='listElement'>
      <Link to={`/server/${title}`}>
        <div className='title'>{title}</div>
      </Link>
      <div className='bar'>
        <input
          type='checkbox'
          id={title}
          className='checkbox'
          checked={checked}
          onChange={handleTogglePower}
        />
        <label htmlFor={title} className='toggle'>
          <i className='ri-shut-down-line btnON'></i>
        </label>
      </div>
    </div>
  );
};
