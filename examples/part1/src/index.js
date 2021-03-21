import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  
  return(
    <div>
      <p>Hello {name}! You are {age} years too young to challenge me!
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const name = 'George'
  const age = 23
  console.log('Hello from component!')
  return (
    <div>
      <p>Greetings! It is now {now.toString()}</p>
      <Hello name="Hearan"/>
      <Hello name={name} age={age}/>
      <Hello age={100}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
