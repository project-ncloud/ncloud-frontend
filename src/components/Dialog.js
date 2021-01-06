export const Dialog = ({show, title, message, action, onClose}) => {
  return (
    <div
      className={!show ? 'hide overlayContainer' : 'overlayContainer'}
      id='confirmPower'>
      <div className='ocontainer oConfimContainer'>
        <div className='topBar'>
          <i className='ri-close-fill' onClick={onClose} />
        </div>
        <div className='confirmHead purple'>
          {title ? title : 'Are you sure?'}
        </div>
        <div className='confirmInfo'>{message}</div>
        <div className='topBar bottomBar'>
          <button className='barBtn subBg purple' onClick={onClose}>
            Cancel
          </button>
          <button className='barBtn' onClick={action}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
