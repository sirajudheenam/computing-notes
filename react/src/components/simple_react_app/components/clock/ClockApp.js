import React from 'react';

class ClockApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    // console.log("this.timerID - Mount");
    // console.log(this.timerID);
  }

  componentWillUnmount() {
    // console.log("this.timerID - Unmount");
    // console.log(this.timerID);
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>This clock is updated every second!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClockApp;
