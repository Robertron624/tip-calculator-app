import { useState } from "react";
import TotalizerArea from "./components/TotalizerArea/TotalizerArea";
import "./App.scss";
import PercentagesArea from "./components/PercentagesArea/PercentagesArea";
import PeopleArea from "./components/PeopleArea/PeopleArea";

const percentageOptions = [0.05, 0.1, 0.15, 0.25, 0.5, "custom"];

function App() {
    const [bill, setBill] = useState(0);
    const [tipAmount, setTipAmount] = useState(0.0);
    const [total, setTotal] = useState(0.0);
    const [discount, setDiscount] = useState(0.05);
    const [numberOfPersons, setNumberOfPersons] = useState(0);

    const resetFunction = () => {
        setBill(0);
        setTipAmount(0);
        setTotal(0);
        setDiscount(0.05);
        setNumberOfPersons(0);
    };

    const hanleBill = (e) => {
        setBill(Number(e.target.value));
    };

    return (
        <div className="App">
            <h1>Splitter</h1>
            <div className="main-container">
                <div className="upper-section">
                    <div className="input-area">
                        <span className="section-title">Bill</span>
                        <div className="total-screen">
                            <span>$</span>
                            <input
                            value={bill}
                                onChange={hanleBill}
                                placeholder="0"
                                type="text"
                                className="bill-value"
                            />
                        </div>
                    </div>
                    <PercentagesArea
                        setDiscount={setDiscount}
                        discount={discount}
                        percentageOptions={percentageOptions}
                    />
                    <PeopleArea numberOfPersons={numberOfPersons} setNumberOfPersons={setNumberOfPersons} />
                </div>
                <TotalizerArea
                    numberOfPersons={numberOfPersons}
                    bill={bill}
                    discount={discount}
                    resetFunction={resetFunction}
                    total={total}
                    tipAmount={tipAmount}
                />
            </div>
        </div>
    );
}

export default App;
