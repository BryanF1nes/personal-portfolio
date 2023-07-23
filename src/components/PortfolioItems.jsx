import React from 'react'
import calculator from '../media/calculator.png';
import './PortfolioItems.css'

const PortfolioItems = () => {
  return (
    <div>
        <div className="item-container">
            <h1>Calculator App</h1>
            <img src={calculator} alt="" />
            <p>This is one of the first programs I ever built, using HTML/CSS and Vanilla JS! This is where I absolutely fell in love with programming!</p>
            <div className="code-container">
                <a className="live" href="https://github.com/BryanF1nes/calculator-app" target='_blank' rel="noopener noreferrer">Code</a>
                <a className="live" href="https://bryanf1nes.github.io/calculator-app/" target='_blank' rel="noopener noreferrer">Live</a>
            </div>
        </div>
    </div>
  )
}

export default PortfolioItems