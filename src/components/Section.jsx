import React from 'react'
import './Section.css'
import WindowButton from './WindowButton'
import Skills from './Skills'

const Section = ({darkMode}) => {
    const windowUp = () => window.scroll(0, -1000)
    const windowDown = () => window.scroll(0, 1000)
  return (
    <section className={darkMode ? "section-container" : 'dark section-container'}>
        <div className="content-container">
            <WindowButton 
            darkMode={darkMode}
            name="Home"
            handleWindow={windowUp}
            />
            <div className="info-container">
                <h1>More About Me?</h1>
                <p>Hello there! My name is <strong>Bryan</strong> and I am a self taught <strong>Web Developer!</strong> Not only do I love to code but I enjoy spending time with my family, going to church and playing guitar! </p>
                <br />
                <p>Here you can see all of the skills i've learned so far in my journey!</p>
                <p className="skill-list-info">HTML5, CSS3, JavaScript, Git, Bootstrap, React, Node.js, and NPM</p>
            </div>
            <Skills />
            <WindowButton 
            darkMode={darkMode}
            name="Contact"
            handleWindow={windowDown}
            />
        </div>
    </section>
  )
}

export default Section