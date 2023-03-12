import React, { useState } from "react";
import "./index.scss";

const PercentagesArea = ({ percentageOptions, discount, setDiscount }) => {
    const [customDiscountOpen, setCustomDiscountOpen] = useState(false);
    function handleClick(e) {
        setDiscount(e.target.value);
    }

    function handleCustomDiscount(e) {
        let discountString = e.target.value;

        setDiscount(Number(discountString) / 100);
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
                    ) : !customDiscountOpen ? (
                        <button
                            onClick={() =>
                                setCustomDiscountOpen(
                                    (customDiscountOpen) => !customDiscountOpen
                                )
                            }
                            className="custom-button"
                            key={i}
                        >
                            {percentage}
                        </button>
                    ) : (
                        <input
                            className="custom-input"
                            key={i}
                            type="text"
                            placeholder="0"
                            onChange={handleCustomDiscount}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PercentagesArea;
