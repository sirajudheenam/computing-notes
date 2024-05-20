import React from "react";
import "../styles/style.css";
class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      style: "",
    };
  }
  componentDidMount() {
    console.log("The component is mounted", this.state.style);
  }

  componentDidUpdate() {
    console.log("The component is updated", this.state.color);
  }

  changeColor(myColor) {
    this.setState({
      color: myColor,
    });
  }

  changeStyle(myStyle) {
    this.setState({
      style: myStyle,
    });
  }

  render() {
    return (
      <div>
        <h1>Class Component Demo</h1>
        <label htmlFor="color">Color:</label>
        <input id="color" type="text"></input>
        <button
          onClick={() => this.changeColor("Orange")}
          className="btn btn-primary"
        >
          Change Color
        </button>
        <p />
        <label htmlFor="style">Style:</label>
        <input id="style" type="text"></input>
        <button
          onClick={() => this.changeColor("Heroic")}
          className="btn btn-secondary"
        >
          Change Style
        </button>
      </div>
    );
  }
}

export default Vehicle;
