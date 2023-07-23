import {
  useRef,
  useMemo,
  useLayoutEffect,
  useEffect,
  useState,
  useReducer,
} from 'react'
import '../styles/concepts.css'

const initialState = { backgroundColor: '#000000' }

// ZUSTAND = reducer check it out
const reducer = (state, action) => {
  switch (action) {
    case 'white':
      return { backgroundColor: 'white' }
    case 'black':
      return { backgroundColor: 'black' }
    case 'purple':
      return { backgroundColor: 'purple' }
    case 'orange':
      return { backgroundColor: 'orange' }
    case 'blue':
      return { backgroundColor: 'blue' }
    case 'green':
      return { backgroundColor: 'green' }
    case 'red':
      return { backgroundColor: 'red' }
    default:
      return { backgroundColor: 'yellow' }
  }
}
const Concepts = () => {
  // useState
  const [count, setCount] = useState(0)
  const increment = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1)
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
  }
  const [input, setInput] = useState('')
  const [counter, setCounter] = useState(0)

  const [anotherCounter, setAnotherCounter] = useState(0)

  // useEffect renders once every component is rendered on the screen
  useEffect(() => {
    document.title = input
    const incrementer = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1)
    }, 1000)

    return () => clearInterval(incrementer)
  }, [input])

  // useLayoutEffect renders before other elements are rendered on the screen
  useLayoutEffect(() => {
    function test() {
      if (anotherCounter === 0) {
        setAnotherCounter(Math.random() * 200)
      }
    }
    test()
  }, [anotherCounter])

  //useReducer
  const [state, dispatch] = useReducer(reducer, initialState)
  // const buttonStyle = { borderRadius: '5px', width: '80px', height: '40px' };

  //useRef
  const myHeaderRef = useRef()
  useEffect(() => {
    console.log(myHeaderRef.current.offsetHeight)
  }, [])

  /* useMemo  */

  /* After useMemo */
  const expensiveCalculation = () => {
    return Math.random() * 500
  }
  /* calculates once and caches the value, useMemo  only rerenders if dependency changes */
  const renderedValue = useMemo(() => expensiveCalculation(), [])

  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment Counter</button>
      </div>

      <div className="div">
        <h1>{counter}</h1>
      </div>

      <div className="div">
        <h2>UseEffect 🔥</h2>
        <h1>{anotherCounter}</h1>
      </div>

      <div>
        <h3>{input}</h3>
        <input onChange={(e) => setInput(e.target.value)} type="text"></input>
      </div>

      <div>
        <h2 onClick={() => setAnotherCounter(0)}>UseLayoutEffect🔥 </h2>
      </div>

      <div style={{ backgroundColor: state.backgroundColor }}>
        Customisabile div
        <div>
          <select onChange={(e) => dispatch(e.target.value)}>
            <option value="blue">blue</option>
            <option value="orange">orange</option>
            <option value="red">red</option>
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="purple">purple</option>
            <option value="green">green</option>
          </select>
        </div>
      </div>

      <div className="use-ref">
        <h1 ref={myHeaderRef}>UseRef</h1>
      </div>

      <div className="use-memo">
        <p onClick={increment}>Count : {count}</p>
        <h1>rendered value : {renderedValue} </h1>
      </div>
    </div>
  )
}

export default Concepts

// The below could lead to an infinite loop

// useEffect(() => {
// 	const incrementer = setInterval(() => {
// 		setCounter((prevCounter) => prevCounter + 1);
// 	}, 1000);
// 	return () => clearInterval(incrementer);
// }, [counter]);

// This will flicker when re-renders so use useLayoutEffect

// useEffect(() => {
// 	function test() {
// 		if (counter === 0) {
// 			setCounter(Math.random() * 200);
// 		}
// 	}
// 	test();
// }, [counter]);
