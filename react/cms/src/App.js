import React from 'react';
import { RouterDemo } from './components/RouterDemo';
import UseEffectDemo from './components/UseEffectDemo';
import ConditionalRendering from './components/ConditionalRendering';
import { Kitchen } from './components/Kitchen';
import { GitHubFetch } from './components/GitHubFetch';
import { FetchAPI } from './components/FetchAPI';
import Vehicle from './components/ClassComponentDemo';
import Game from './components/Game';
import { TodoList } from './components/TodoList';
import { todos, tabs } from './components/todos'

import './helpers/helper.js'
import './stylesheets/style.css';

export const App = () => {
  // console.log('App is running')

  const [selected, setSelected] = React.useState('useeffectdemo')
  function handleModuleChange() {
    let e = document.getElementById("modules")
    setSelected(e.value)
    console.log(selected)
    // let text = e.options[e.selectedIndex].text;
    // console.log("text: " + text, "value: " + value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Demo</h1>
        <p className="App-intro">
          Long Paragraph
        </p>
        <div>{selected}</div>
        <select name="module" id="modules" onChange={handleModuleChange}>
          <optgroup label="CoreConcepts">
            <option value="useeffectdemo" >UseEffectDemo</option>
            <option value="conditionalrendering">ConditionalRendering</option>
          </optgroup>
          <optgroup label="Advanced">
            <option value="routerdemo">RouterDemo</option>
            <option value="game">Game</option>
            <option value="fetchapi">FetchAPI</option>
            <option value="kitchen">Kitchen</option>
            <option value="githubfetch">GitHubFetch</option>
            <option value="inlinestyle">InlineStyle</option>
          </optgroup>
        </select>
      </header>
      {selected === 'useeffectdemo' ? <UseEffectDemo /> : null}
      {selected === 'kitchen' ? <Kitchen /> : null}
      {selected === 'githubfetch' ? <GitHubFetch login='sirajudheenam' /> : null}
      {selected === 'fetchapi' ? <FetchAPI /> : null}
      {selected === 'classcomponentdemo' ? <Vehicle /> : null}
      {selected === 'todolist' ? <TodoList todos={todos} tab={tabs[0]} /> : null}
      {selected === 'game' ? <Game /> : null}
      {selected === 'conditionalrendering' ? <ConditionalRendering /> : null}
      {selected === 'routerdemo' ? <RouterDemo /> : null}
      {selected === 'inlinestyle' ? React.createElement('h1', { style: { color: 'blue', backgroundColor: 'orange' } }, 'Hello there !! So you reached here ?') : null}
      {selected === 'undefined' ? <div> No module selected</div> : null}
    </div >
  );
}
