import React from 'react'
import './Navbar.css'

const Navbar = ({darkMode, darkModeToggler}) => {
  return (
    <nav className={darkMode ? "nav--wrapper" : "dark nav--wrapper"}>
        <div>
            <h1 onClick={() => window.scroll(0, 1900)}>Portfolio</h1>
        </div>
        <ul className="list--wrapper">
            <li onClick={() => window.scroll(0, -1000)}>Home</li>
            <li onClick={() => window.scroll(0, 900)}>About</li>
            <li onClick={() => window.scroll(0, 2900)}>Contact</li>
            <div className="dark-mode-container">
                <div className={darkMode ? "bullet" : "dark bullet"}>
                    <div className="circle" onClick={darkModeToggler}></div>
                </div>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar