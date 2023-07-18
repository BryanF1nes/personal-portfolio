import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const darkModeToggler = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className="App">
      <Navbar 
      darkMode={darkMode}
      darkModeToggler={darkModeToggler}
      />
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
