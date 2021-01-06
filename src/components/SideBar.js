import {ListElement} from './ListElement';

export const SideBar = ({setShowConsole, setShowAddPiModal}) => {
  return (
    <div className='sidebar'>
      <div className='mainLogo'>
        <i className='ri-hard-drive-fill icon'></i>
        <p className='title'>N Cloud</p>
      </div>
      <div className='bigSpacer'></div>
      <div className='sectionHead'>
        <p className='title'>Servers</p>
        <div className='subActions'>
          <i
            className='ri-add-line'
            onClick={() => setShowAddPiModal(x => !x)}
          />
        </div>
      </div>
      <div className='spacer'></div>

      <div className='list'>
        <ListElement title='Pi4_magiPi' />
        <ListElement title='Botai Pi Server JamaiBaBu' />
      </div>

      <div className='bottomContainer'>
        <i className='ri-settings-fill settings icon'></i>
        <i className='ri-information-fill info icon'></i>
        <i
          className='ri-code-box-fill settings icon'
          onClick={() => setShowConsole(x => !x)}></i>
      </div>
    </div>
  );
};
