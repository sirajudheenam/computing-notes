import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import test from './test';
import Game from './components/Game';
import Header from './components/Header';
import Footer from './components/Footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const header = ReactDOM.createRoot(document.getElementById('header'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));

header.render(<Header />);
root.render(<Game />);
footer.render(<Footer />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
