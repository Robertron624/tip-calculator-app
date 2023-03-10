import React from 'react'
import './index.scss'

const PeopleArea = () => {
  return (
    <div className='people-area'>
        <span className='section-title'>Number of People</span>
        <div className="people-input">
            <img src="icon-person.svg" alt="person icon" />
            <input type="text" name="number-of-persons" id="number-of-persons" />
        </div>
    </div>
  )
}

export default PeopleArea