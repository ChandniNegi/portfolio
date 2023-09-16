import './Detailstyle.css'
import { Link } from 'react-router-dom'

import React from 'react'

const Detailcard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>SOFT-SKILLS</p>
                <p>-Leadership Quality-</p>
                <p>-Good Teamwork-</p> 
                <p>-Communication skills-</p>
                <p>-Time management-</p>
                <p>-Creativity-</p>
                <p>Good Speaker and Listener</p>
                <Link to="/contact" className="btn">
                    Contact Now!
                </Link>
            </div>

            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>HARD-SKILLS</p>
                <p>-Html-</p>
                <p>-Css-</p> 
                <p>-Javascript-</p>
                <p>-DSA-</p>
                <p>-Nodejs-</p>
                <p>-Mongodb-</p>
                <Link to="/contact" className="btn">
                    Contact Now!
                </Link>
            </div>

          
        </div>
    </div>
  )
}

export default Detailcard