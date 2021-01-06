export const PendingUserList = ({name, role}) => {
  return (
    <div className='row pendingUserRow'>
      <div className='col'>
        <i className='ri-user-5-fill'></i>
        {name}
      </div>
      <div className='col'>{role}</div>
      <div className='col colAction'>
        <i className='ri-user-unfollow-fill'></i>
        <i className='ri-user-follow-fill'></i>
      </div>
    </div>
  );
};
