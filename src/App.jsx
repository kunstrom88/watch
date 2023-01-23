import { useState } from 'react'
import './App.css'

const date = new Date()

console.log(date.getHours(), date.getMinutes(), date.getSeconds())

function App() {
  const [seconds, setSeconds] = useState(date.getSeconds());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [hours, setHours] = useState(date.getHours());

  setTimeout(() => {
    if(seconds !== 59) return setSeconds(seconds + 1);
    setSeconds(0)

    if (minutes !== 59) return setMinutes(minutes + 1);
    setMinutes(0)

    if(hours !== 23) return setHours(hours + 1);
    setHours(0)     
  }, 1000)

  return (
    <div className="App">
      <h1>{hours < 10 ? 0 : ""}{hours} : {minutes < 10 ? 0 : ""} {minutes} : {seconds < 10 ? 0 : ""}{seconds}</h1>
    </div>
  )
}

export default App
