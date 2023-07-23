import React from "react";
import { RouterDemo } from "./RouterDemo";
import UseEffectDemo from "./UseEffectDemo";
import ConditionalRendering from "./ConditionalRendering";
import { Kitchen } from "./Kitchen";
import { GitHubFetch } from "./GitHubFetch";
import { FetchAPI } from "./FetchAPI";
import Vehicle from "./ClassComponentDemo";
import Game from "./Game";
import { TodoList } from "./TodoList";
import { todos, tabs } from "./todos";
import ScoreCard from "./ScoreCard";
import StepsContainer from "./StepsContainer";
import PizzaApp from "./PizzaApp";
import Advice from "./Advice";
import CountriesList from "./CountriesList";
import TravelList from "./TravelList";
import FlashCardApp from "./FlashCardApp";
import Concepts from "./Concepts";
import DateCountApp from "./DateCountApp";

import "../helpers/helper.js";
import "../styles/component_selector.css";

export const ComponentSelector = () => {
  const [selected, setSelected] = React.useState("travellist");

  function handleModuleChange() {
    let e = document.getElementById("module");
    setSelected(e.value);
    console.log(selected);
    // let text = e.options[e.selectedIndex].text;
    // console.log("text: " + text, "value: " + value)
  }

  return (
    <div className="menu">
      <div>
        <div>
          <header className="App-header">
            <h1>Demo</h1>
            <p>Long Paragraph</p>
            <div>{selected}</div>
            <select name="module" id="module" onChange={handleModuleChange}>
              <optgroup label="Exercises">
                <option value="pizza">1. Pizza</option>
                <option value="steps">2. Steps</option>
              </optgroup>
              <optgroup label="Code Challenge">
                <option value="score">1. Score</option>
                <option value="count">2. Date Count</option>
                <option value="flashcard">3. Flash Card</option>
              </optgroup>
              <optgroup label="CoreConcepts">
                concepts
                <option value="concepts">Concepts</option>
                <option value="useeffectdemo">UseEffectDemo</option>
                <option value="conditionalrendering">
                  ConditionalRendering
                </option>
                <option value="routerdemo">RouterDemo</option>
                <option value="game">Game</option>
                <option value="fetchapi">FetchAPI</option>
                <option value="kitchen">Kitchen</option>
                <option value="githubfetch">GitHubFetch</option>
                <option value="inlinestyle">InlineStyle</option>
                <option value="todolist">ToDo List</option>
                <option value="travellist">Travel List</option>
                <option value="countries_list">Countries List</option>
                <option value="advice">Advice</option>
              </optgroup>
            </select>
          </header>
        </div>
        <div>
          {selected === "concepts" && <Concepts />}
          {selected === "pizza" && <PizzaApp className="pizza-body" />}
          {selected === "steps" && <StepsContainer className="steps-body" />}
          {selected === "score" && (
            <ScoreCard login="sirajudheenam" className="score-body" />
          )}
          {selected === "count" && <DateCountApp className="count-body" />}
          {selected === "travellist" && <TravelList className="" />}
          {selected === "flashcard" && <FlashCardApp className="" />}
          {selected === "countries_list" && <CountriesList />}
          {selected === "useeffectdemo" && <UseEffectDemo />}
          {selected === "kitchen" && <Kitchen />}
          {selected === "githubfetch" && <GitHubFetch login="sirajudheenam" />}
          {selected === "fetchapi" && <FetchAPI />}
          {selected === "classcomponentdemo" && <Vehicle />}
          {selected === "todolist" && <TodoList todos={todos} tab={tabs[0]} />}
          {selected === "game" && <Game />}
          {selected === "advice" && <Advice />}
          {selected === "conditionalrendering" && <ConditionalRendering />}
          {selected === "routerdemo" && <RouterDemo />}
          {selected === "inlinestyle" &&
            React.createElement(
              "h1",
              { style: { color: "blue", backgroundColor: "orange" } },
              "Hello there !! So you reached here ?",
            )}
          {selected === "undefined" && <div> No module selected</div>}
          {/* <CountriesList /> */}
        </div>
      </div>
      <footer className="App-footer"></footer>
    </div>
  );
};
export default ComponentSelector;
