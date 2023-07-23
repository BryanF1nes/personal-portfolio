import React from 'react'
import WindowButton from './WindowButton'
import './Contact.css'

const Contact = ({darkMode}) => {

const windowUp = () => window.scroll(0, 1900)

  return (
    <div className={darkMode ? "section-container" : "dark section-container"}>
        <div className="content-container">
            <WindowButton 
            darkMode={darkMode}
            name="Portfolio"
            handleWindow={windowUp}
            />
            <h1>Contact Me</h1>
            <form className={darkMode ? "contact-form" : "dark contact-form"}>
                <div className="form-info">
                    <label>Name</label>
                    <input type="text" name="name" placeholder='Enter Your Name'/>
                </div>
                <div className="form-info">
                    <label>Email</label>
                    <input type="email" name="email" placeholder='Enter Your Email'/>
                </div>
                <div className="form-info">
                    <label>Message</label>
                    <textarea name="textarea" placeholder='Type Your Message Here'></textarea>
                </div>
                <button className="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact