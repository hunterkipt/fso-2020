import React, {useState} from 'react'


const Display = ({counter}) => <div>{counter}</div>


const Button = ({handleClick, text}) => ( 
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const reset = () => setCounter(0)
  console.log('rendering...', counter)

  return (
    <div>
    <Display counter={counter}/>
    <Button
      handleClick={increment}
      text='plus'
    />
    <Button
      handleClick={reset}
      text='zero'
    />
    <Button
      handleClick={decrement}
      text='minus'
    />
    </div>
  )
}

export default App;
