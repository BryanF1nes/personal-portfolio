import React from 'react'
import WindowButton from './WindowButton'

const Portfolio = ({darkMode}) => {
const windowUp = () => window.scroll(0, 900)
const windowDown = () => window.scroll(0, 2900)
  return (
    <div className={darkMode ? "section-container" : "dark section-container"}>
        <div className="content-container">
            <WindowButton 
            darkMode={darkMode}
            name="About"
            handleWindow={windowUp}
            />
            <h1>Potfolio</h1>
            <WindowButton 
            darkMode={darkMode}
            name="Contact"
            handleWindow={windowDown}
            />
        </div>
    </div>
  )
}

export default Portfolio