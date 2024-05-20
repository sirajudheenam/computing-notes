import React, { useState /*useEffect*/ } from 'react'
import '../styles/index.css'

const DateCountApp = () => {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  const date = new Date()
  date.setDate(date.getDate() + count)

  const style = {
    backgroundColor: '#edc84b',
    fontFamily: ['IBM Plex Mono', 'sans-serif'],
    fontSize: '20px',
    display: 'block',
    position: 'absolute',
    height: '3px',
    width: '50rem',
  }

  function handleReset() {
    setStep(1)
    setCount(0)
  }
  return (
    <div style={style}>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <input
          type="range"
          min="0"
          max="10"
          onChange={(e) => {
            setStep(Number(e.target.value))
          }}
          value={step}
        />
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div>
        <input
          type="text"
          onChange={(e) => {
            setCount(Number(e.target.value))
          }}
          value={count}
        />
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} day(s) from today is `
            : `${Math.abs(count)} day(s) ago from today was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  )
}

export default DateCountApp
