import React from "react"
import '../stylesheets/style.css';
import restaurant from '../images/restaurant.jpeg';

// const dishes = [
//   "Chicken Tikka Masala",
//   "Mutton Tikka Masala",
//   "Beef Masala",
//   "Chicken Madras",
//   "Chicken Briayni",
//   "Paneer Tikka Masala",
//   "Mutton Briayni"
// ];

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Minestrone"
];


const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
// dishes.map((dish) => console.log(dish));
// console.log(dishObjects);

// Array Destructuring
const [, , c] = ["A value", "B value ", "@"]
// Access 'C Value' using c


function Header(props) {
  return (
    <header>
      <h1>{props.name} Kitchen </h1>
    </header>
  )
}

function Main(props) {
  return (
    <header>
      <h2>We serve the {props.adjective} food around </h2>
      <img
        src={restaurant}
        height={200}
        alt="A restaurant" />
      <hr />
      <ul style={{ textAlign: "left", color: "blue" }}>
        {props.dishes.map((dish) => (<li key={dish.id}> {dish.title} </li>))}
      </ul>
    </header>
  )
}

function Footer(props) {
  return (
    <header>
      <h3>Copyrights {props.year} </h3>
      <div><h4> {c} </h4></div>
    </header>
  )
}

/// function Kitchen() {
//   return (
//   <div className="Kitchen">
//   <Header name="ABC"/>
//   <Main adjective="amazing" dishes={dishObjects}/>
//   <Footer year={new Date().getFullYear()}/>
//   </div>
//   );
// }

// Shortened Fragment inthe Kitchen function but it is loosing its style (className)

export function Kitchen(props) {
  if (props.isEnabled) {
    return (
      <div className="kitchen" align="center">
        <Header name="Cindy" />
        <Main adjective="amazing" dishes={dishObjects} />
        <Footer year={new Date().getFullYear()} />
      </div>)
  } else {
    return <h1> Kitchen Module is not activated </h1>
  }
}


