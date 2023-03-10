import React from "react";
import './index.scss'

const TotalizerArea = ({tipAmount, total, resetFunction}) => {
    return (
        <div className="totalizers-area">
            <div className="values">
                <div className="tip-amount">
                    <p>
                        Tip Amount <span>/ person</span>
                    </p>
                    <span className="amount-number">${tipAmount}</span>
                </div>
                <div className="total">
                    <p>
                        Total <span>/ person</span>
                    </p>
                    <span className="amount-number">${total}</span>
                </div>
            </div>
            <button onClick={resetFunction} disabled={true} className="reset">Reset</button>
        </div>
    );
};

export default TotalizerArea;
