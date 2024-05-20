import React, { useState, useEffect, useReducer } from 'react';
// import '../styles/style.css';

function UseEffectDemo() {
  // const what = useState();
  // console.log(what);

  const [emotion, setEmotion] = useState('happy');
  const [secondary, setSecondary] = useState('tired');

  // To replace this make use of useReducer
  // const [checked, setChecked] = useState(false)

  // // To replace this
  // // onChange={ () => setChecked( (checked) => !checked )}
  // function toggle() {
  //   setChecked( (checked) => !checked )
  // }

  const [checked, toggle] = useReducer((checked) => !checked, false);
  // toggle is the name of the function
  // first argement is the function logic
  // second argument is the default state

  // useEffect  also takes dependency array as second argument
  // this watches emotion change and calls if it changes
  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion]);

  // this watches secondary emotion change and calls if it changes
  useEffect(() => {
    console.log(`It's ${secondary} around here`);
  }, [secondary]);

  // this watches [checked] change and calls if it changes
  useEffect(() => {
    console.log(`Checked? :${checked}`);
  }, [checked]);

  // useEffect(() => {
  //   console.log(`It's ${emotion} and ${secondary} around here and template checked status is ${checked}`);
  // }, []); //[] is dependency array; with an empty [], it just executed on initial render only
  // with []; executed only once

  // this watches all [emotion secondary checked] change and calls if anyone changes
  useEffect(() => {
    console.log(
      `It's ${emotion} and ${secondary} around here and template checked status is ${checked}`
    );
  }); // no second argument for useEffect. hence this watches for all changes.
  // It gets executed whenever render and re-render happens

  console.log('During Render');

  useEffect(function () {
    console.log('After initial render');
  }, []);

  useEffect(function () {
    console.log('After every render');
  });

  useEffect(
    function () {
      console.log('Each time checked value changes');
    },
    [checked]
  );
  return (
    <>
      <h1>
        {' '}
        Current emotion is {emotion} and {secondary}{' '}
      </h1>
      <button onClick={() => setEmotion('Sick')}>Make Sick </button>
      <button onClick={() => setEmotion('Enthustiastic')}>Make Enthuse</button>
      <button onClick={() => setEmotion('Amazed')}>Make Amaze</button>
      <br />
      <button onClick={() => setSecondary('Crabby')}>Make Crabby </button>
      <button onClick={() => setSecondary('Happy')}>Make Happy</button>
      <button onClick={() => setSecondary('Drowsy')}>Make Drowsy</button>
      <hr />
      <input id="cheked" type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? 'checked' : 'not checked'}</p>
    </>
  );
}

export default UseEffectDemo;
