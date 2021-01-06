export const Modal = ({action, panel}) => {
  return (
    <div className='overlayContainer'>
      <div className='ocontainer oAddServerContainer'>
        <div className='topBar'>
          <i className='ri-close-fill' onClick={() => action(x => !x)} />
        </div>
        {panel}
      </div>
    </div>
  );
};
