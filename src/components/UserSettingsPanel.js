import {UserList} from './UserList';

export const UserSettingsPanel = () => {
  return (
    <>
      <div className='actionBar'>
        <div className='confirmHead purple'>Users</div>
        <input
          type='text'
          name='search'
          id='userListSearch'
          placeholder='Search user'
        />
      </div>
      <div className='list listHead'>
        <div className='row'>
          <div className='col'>Name</div>
          <div className='col'>Type</div>
          <div className='col'>Status</div>
          <div className='col colAction'>Action</div>
        </div>
      </div>
      <div className='list' id='userList'>
        <UserList name='Sourav Gain' role='Student' status='Enabled' />
        <UserList name='Indrajit Sarkar' role='Student' status='Disabled' />
        <UserList name='Surajit Guun' role='Faculty' status='Enabled' />
      </div>
      <div className='loading hide' id='userListLoading'>
        <div className='loadingBG'>
          <div className='bar'></div>
        </div>
      </div>
    </>
  );
};
