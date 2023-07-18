import React from 'react'
import './Main.css'
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa6'

const Main = (props) => {
  return (
    <div className={props.darkMode ? "main" : "dark main"}>
        <div>
            <h1 className="typewritter">console.log("Hello World!")</h1>
            <p>Where the passion begins!</p>
            <div className="icons">
                <FaGoogle className="icon-pack" />
                <FaGithub className="icon-pack" />
                <FaLinkedin className="icon-pack"/>
            </div>
        </div>
    </div>
  )
}

export default Main