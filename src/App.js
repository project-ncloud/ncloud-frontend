import {useState} from 'react';
import {Console} from './components/Console';
import {Dashboard} from './components/Dashboard';
import {SideBar} from './components/SideBar';

function App() {
  const [showConsole, setShowConsole] = useState(false);
  return (
    <>
      <SideBar setShowConsole={setShowConsole} />
      <Dashboard />
      {showConsole && <Console showConsole={showConsole} />}
    </>
  );
}

export default App;
