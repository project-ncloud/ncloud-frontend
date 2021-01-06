export const Modal = ({action, panel, show}) => {
  return (
    <div className={show ? 'overlayContainer' : 'hide'}>
      <div className='ocontainer oAddServerContainer'>
        <div className='topBar'>
          <i className='ri-close-fill' onClick={() => action(x => !x)} />
        </div>
        {panel}
      </div>
    </div>
  );
};
