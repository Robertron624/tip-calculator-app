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

    return (
        <div className="App">
            <h1>Splitter</h1>
            <div className="main-container">
                <div className="input-area">
                    <span className="section-title">Bill</span>
                    <div className="total-screen">
                        <span>$</span>
                        <span className="bill-value">{bill}</span>
                    </div>
                </div>
                <PercentagesArea
                    setDiscount={setDiscount}
                    discount={discount}
                    percentageOptions={percentageOptions}
                />
                <PeopleArea/>
                <TotalizerArea total={total} tipAmount={tipAmount} />
            </div>
        </div>
    );
}

export default App;
