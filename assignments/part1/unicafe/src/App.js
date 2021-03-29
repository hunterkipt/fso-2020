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

  return (
    <>
    <h1>Give Feedback</h1>
    <div>
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />
    </div>
    <h1>Statistics</h1>
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
    </>
  )
}


export default App;
