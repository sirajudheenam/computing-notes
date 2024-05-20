import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className='ui dimmer show modals visible active'>
      <div className='ui raised very padded text container segment'>
        <h1> I am a modal </h1>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}
export default Modal;

/* Instead of showing the Modal as child of wrapper
We can show the Modal as child of the body
We can do this using React Portal.
Look at the Modal.js for details.
*/
