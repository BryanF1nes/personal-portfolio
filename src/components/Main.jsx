import React from 'react'
import './Main.css'
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa6'
import WindowButton from './WindowButton'

const Main = ({darkMode}) => {
  const windowDown = () => window.scroll(0, 1000)
  return (
    <div className={darkMode ? "main" : "dark main"}>
        <div className="main-container">
            <h1 className="typewritter">console.log("Hello World!")</h1>
            <p className="main-p">Where the passion begins!</p>
            <div className="icons">
                <FaGoogle className="icon-pack" />
                <a className="icon-pack" href="https://github.com/BryanF1nes" target='_blank'><FaGithub className="icon-pack" /></a>
                <a className="icon-pack" href="https://www.linkedin.com/in/bryan-fines-a44384270/" target='_blank'><FaLinkedin className="icon-pack"/></a>
            </div>
        </div>
        <WindowButton 
        darkMode={darkMode}
        name="About"
        handleWindow={windowDown}
        />
    </div>
  )
}

export default Main