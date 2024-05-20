import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css';

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
