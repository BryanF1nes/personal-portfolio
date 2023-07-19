import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Section from './components/Section';

function App() {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('DARK_MODE_DATA')))

  const darkModeToggler = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  useEffect(() => {
    localStorage.setItem('DARK_MODE_DATA', JSON.stringify(darkMode))
  }, [darkMode])
  
  return (
    <div className="App">
      <Navbar 
      darkMode={darkMode}
      darkModeToggler={darkModeToggler}
      />
      <Main 
      darkMode={darkMode}
      />
      <Section darkMode={darkMode}/>
    </div>
  );
}

export default App;
