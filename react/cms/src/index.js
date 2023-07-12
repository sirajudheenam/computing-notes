import { createRoot } from 'react-dom/client';
import './stylesheets/style.css';
import { App } from "./App";

const container = document.getElementById('root');
const root = createRoot(container);

// React 17
// ReactDOM.render(
// Short hand of <React.Fragment> is <>
//   <>
//     <Kitchen isEnabled={true} />
//   </>,
//   document.getElementById('root')
// );

// React 18
root.render(
  <>
    <App />
  </>
);

