import {useContext} from 'react';
import {GlobalContext} from '../context/Provider';

export const Console = () => {
  const {modal} = useContext(GlobalContext);
  const {
    state: {showConsole},
  } = modal;

  const clearConsole = () => {};
  return (
    <div
      className={`nasconsole ${!showConsole && 'Nright'}`}
      id='nConsolePanel'>
      <div className='sectionTitle purple'>Console</div>
      <button className='clrBtn subBg red' onClick={clearConsole}>
        Clear
      </button>
      <div className='debugContainer' id='debugContainer'>
        <div>
          Pi Server Connected <span className='cyanBg'>Success</span>
        </div>
      </div>
    </div>
  );
};
