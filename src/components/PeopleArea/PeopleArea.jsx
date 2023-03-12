import React, { useState } from "react";
import "./index.scss";

const PeopleArea = ({ numberOfPersons, setNumberOfPersons }) => {

    const [ peopleError, setPeopleError ] = useState(false);

    function handleNumberOfPersons(e) {
        if(e.target.value == '') {
            setPeopleError(true);
        }
        else{
            setPeopleError(false);
        }

        setNumberOfPersons(parseInt(e.target.value));
    }

    return (
        <div className="people-area">
            <div className="title-error">
                <span className="section-title">Number of People</span>
                {peopleError && (<span className="blank-error">C'ant be zero</span>)}
            </div> 
            <div className="people-input">
                <img src="icon-person.svg" alt="person icon" />
                <input
                    value={numberOfPersons || "0"}
                    onChange={handleNumberOfPersons}
                    placeholder="0"
                    type="text"
                    name="number-of-persons"
                    id="number-of-persons"
                />
            </div>
        </div>
    );
};

export default PeopleArea;
