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
            <div>
                <a href="#" target='_blank'>Code</a>
                <a href="#" target='_blank'>Live</a>
            </div>
        </div>
    </div>
  )
}

export default PortfolioItems