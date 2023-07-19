import React from 'react'
import './WindowButton.css'

const WindowButton = ({name, darkMode, handleWindow}) => {
  return (
    <button 
    className={darkMode ? "dark window-btn" : "window-btn"}
    onClick={handleWindow}
    >{name}</button>
  )
}

export default WindowButton