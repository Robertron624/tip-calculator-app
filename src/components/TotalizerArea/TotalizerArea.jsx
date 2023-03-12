import React from "react";
import "./index.scss";

const TotalizerArea = ({
    numberOfPersons,
    total,
    resetFunction,
    bill,
    discount,
}) => {
    // console.log("bill -> " + bill)
    // console.log("tip amount -> " + tipAmount)
    // console.log("Tip ammount x bill -> " + bill * tipAmount)
    // console.log(numberOfPersons);
    return (
        <div className="totalizers-area">
            <div className="values">
                <div className="tip-amount">
                    <p>
                        Tip Amount <span>/ person</span>
                    </p>
                    <span className="amount-number">
                        ${(bill * discount) / (numberOfPersons || 1) || "0"}
                    </span>
                </div>
                <div className="total">
                    <p>
                        Total <span>/ person</span>
                    </p>
                    <span className="amount-number">
                        $
                        {(parseInt(bill) + bill * discount) /
                            (numberOfPersons || 1) || "0"}
                    </span>
                </div>
            </div>
            <button onClick={resetFunction} disabled={true} className="reset">
                Reset
            </button>
        </div>
    );
};

export default TotalizerArea;
