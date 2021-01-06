export const Console = ({showConsole}) => {
  const clearConsole = () => {};

  return (
    <div className='nasconsole' id='nConsolePanel'>
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