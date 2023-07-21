import React from 'react'
import './Section.css'
import WindowButton from './WindowButton'
import Skills from './Skills'

const Section = ({darkMode}) => {
    const windowUp = () => window.scroll(0, -1000)
    const windowDown = () => window.scroll(0, 1900)
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
                <p>Hello there! My name is <strong>Bryan</strong> and I am a self taught <strong>Web Developer!</strong> Not only do I love to code but I enjoy spending time with my wife and son, going to church and playing guitar! </p>
                <br />
                <p>Here are some of the languages and tools i've learned so far!</p>
                <p className="skill-list-info">HTML5, CSS3, JavaScript, Git, React, Node.js, and NPM</p>
                <p>languages and tools i'm learning?</p>
                <p className="skill-list-info">Tailwind, Typescript and more!</p>
            </div>
            {/* <Skills /> */}
            <WindowButton 
            darkMode={darkMode}
            name="Portfolio"
            handleWindow={windowDown}
            />
        </div>
    </section>
  )
}

export default Section