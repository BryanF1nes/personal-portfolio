import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? "nav--wrapper" : "dark nav--wrapper"}>
        <div>
            <h1>Portfolio</h1>
        </div>
        <ul className="list--wrapper">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <div className="dark-mode-container">
                <div className={props.darkMode ? "bullet" : "dark bullet"}>
                    <div className="circle" onClick={props.darkModeToggler}></div>
                </div>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar