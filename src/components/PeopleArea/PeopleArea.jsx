import React from 'react'
import './index.scss'

const PeopleArea = ({setNumberOfPersons}) => {

  function handleNumberOfPersons (e) {
    setNumberOfPersons(parseInt(e.target.value))
  }

  return (
    <div className='people-area'>
        <span className='section-title'>Number of People</span>
        <div className="people-input">
            <img src="icon-person.svg" alt="person icon" />
            <input onChange={handleNumberOfPersons} placeholder='0' type="text" name="number-of-persons" id="number-of-persons" />
        </div>
    </div>
  )
}

export default PeopleArea