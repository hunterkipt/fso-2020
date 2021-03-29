import React, {useState} from 'react'


const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>This app is used by pressing the buttons</div>
    )
  }

  return (
    <div>Button Press History: {allClicks.join(' ')}</div>
  )
}


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>    
    {text}  
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  const average = total !== 0 ? (good - bad) / total : total
  const positive = total !== 0 ? good / total * 100 : 100
  return (
    <>
    <h1>Give Feedback</h1>
    <div>
      <Button handleClick={handleGood} text='Good' />
      <Button handleClick={handleNeutral} text='Neutral' />
      <Button handleClick={handleBad} text='Bad' />
    </div>
    <h1>Statistics</h1>
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive + '%'}</p>
    </div>
    </>
  )
}


export default App;
