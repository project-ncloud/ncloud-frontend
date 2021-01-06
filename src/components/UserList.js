export const UserList = ({name, role, status}) => {
  return (
    <div className='row'>
      <div className='col'>
        <i className='ri-user-5-fill'></i>
        {name}
      </div>
      <div className='col'>{role}</div>
      <div className='col'>{status}</div>
      <div className='col colAction'>
        <i className='ri-close-circle-fill'></i>
        <input type='checkbox' id={name} className='checkbox' />
        <label htmlFor={name} className='toggle'>
          <i className='ri-shut-down-line btnON'></i>
        </label>
      </div>
    </div>
  );
};
