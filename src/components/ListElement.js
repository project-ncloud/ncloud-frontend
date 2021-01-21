import {useState} from 'react';
import {Link} from 'react-router-dom';

export const ListElement = ({title}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='listElement'>
      <Link to={`/${title}`}>
        <div className='title'>{title}</div>
      </Link>
      <div className='bar'>
        <input
          type='checkbox'
          id={title}
          className='checkbox'
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor={title} className='toggle'>
          <i className='ri-shut-down-line btnON'></i>
        </label>
      </div>
    </div>
  );
};
