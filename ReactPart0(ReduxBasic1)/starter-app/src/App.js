import { useSelector } from 'react-redux';
import './App.css';
import Timer from './components/Timer';
import ToggleComp from './components/ToggleComp';

function App() {
  const toggle = useSelector(state=>state.toggle)
  return (
    <>
  
    {toggle && <Timer/>}

    <ToggleComp/>
    </>
  );
}

export default App;
