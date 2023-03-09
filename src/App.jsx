import { useState } from 'react'
import TotalizerArea from './components/TotalizerArea/TotalizerArea'
import './App.scss'
import PercentagesArea from './components/PercentagesArea/PercentagesArea'

const percentageOptions = [
  .05,
  .1,
  .15,
  .25,
  .50,
  "custom"
]

function App() {
  const [bill, setBill] = useState(0)
  const [ tipAmount, setTipAmount] = useState(0.00)
  const [ total, setTotal] = useState(0.00)

  return (
    <div className="App">
      <h1>Splitter</h1>
      <div className="main-container">
        <div className="input-area">
          <span>Bill</span>
          <div className="total-screen">
            <span>${bill}</span>
            <span className="bill-value"></span>
          </div>
        </div>
        <PercentagesArea percentageOptions={percentageOptions}/>
        <TotalizerArea total={total} tipAmount={tipAmount}/>
      </div>
    </div>
  )
}

export default App
