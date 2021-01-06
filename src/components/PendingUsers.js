import {Loading} from './Loading';
import {PendingUserList} from './PendingUserList';

export const PendingUsers = ({loading}) => {
  return (
    <>
      <div className='actionBar'>
        <div className='confirmHead purple'>Pending Users</div>
        <input
          type='search'
          name=''
          id='userPendingListSearch'
          placeholder='Search user'
        />
      </div>
      <div className='list listHead'>
        <div className='row pendingUserRow'>
          <div className='col'>Name</div>
          <div className='col'>Type</div>
          <div className='col colAction'>Action</div>
        </div>
      </div>
      <div className='list' id='userPendingList'>
        <PendingUserList name='Sujay Saha' role='Student' />
        <PendingUserList name='Debabrata Barik' role='Faculty' />
      </div>
      {loading && <Loading />}
    </>
  );
};
