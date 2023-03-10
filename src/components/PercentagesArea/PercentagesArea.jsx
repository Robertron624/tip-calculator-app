import React from "react";
import "./index.scss";

const PercentagesArea = ({ percentageOptions, discount, setDiscount }) => {

  function handleClick(e){
    setDiscount(e.target.value);
  }


    return (
        <div className="percentage-section">
            <span className="section-title">Select Tip %</span>
            <div className="percentage-buttons">
                {percentageOptions.map((percentage, i) => {
                    return typeof percentage === "number" ? (
                        <button
                            onClick={handleClick}
                            className={`number-percentage ${
                                discount == percentage ? "selected" : ""
                            }`}
                            key={i}
                            value={percentage}
                        >{`${percentage * 100}%`}</button>
                    ) : (
                        <button className="custom-button" key={i}>
                            {percentage}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default PercentagesArea;
