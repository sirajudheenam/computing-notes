import React from 'react'
// import '../styles/style.css';

class Pokoman extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'hello react course',
      date: '12.07.2023',
    }
  }

  render() {
    console.log('current app state: ' + this.state)

    return (
      <div className="app-container">
        <div>
          <h4>our small pokeman app</h4>
          <form action="">
            <label htmlFor="">choose your pokeman type </label>
            <select>
              <option value="1">normal</option>
              <option value="2">fighting</option>
              <option value="3">flying</option>
            </select>
            <button className="btn btn-success">search for type</button>
          </form>
        </div>

        <h1>Pokoman</h1>
      </div>
    )
  }
}

export default Pokoman
