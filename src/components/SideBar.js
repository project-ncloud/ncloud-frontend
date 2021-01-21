import {useContext} from 'react';
import {ListElement} from './ListElement';
import {GlobalContext} from '../context/Provider';
import {Link} from 'react-router-dom';

export const SideBar = () => {
  const {server, modal} = useContext(GlobalContext);
  const {
    state: {servers},
  } = server;

  const {toggleConsole, toggleAddPiModal} = modal;

  return (
    <div className='sidebar'>
      <Link to='/'>
        <div className='mainLogo'>
          <i className='ri-hard-drive-fill icon'></i>
          <p className='title'>N Cloud</p>
        </div>
      </Link>
      <div className='bigSpacer'></div>
      <div className='sectionHead'>
        <p className='title'>Servers</p>
        <div className='subActions'>
          <i className='ri-add-line' onClick={() => toggleAddPiModal()} />
        </div>
      </div>
      <div className='spacer'></div>

      <div className='list'>
        {servers.map(server => (
          <ListElement key={server.name} title={server.name} />
        ))}
      </div>

      <div className='bottomContainer'>
        <i className='ri-settings-fill settings icon'></i>
        <i className='ri-information-fill info icon'></i>
        <i
          className='ri-code-box-fill settings icon'
          onClick={() => toggleConsole()}></i>
      </div>
    </div>
  );
};
