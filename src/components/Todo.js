import { useState } from "react"; // we import the useState function from react

import Modal from './Modal'; // import our other components
import Backdrop from './Backdrop'; // component

function Todo(props) { // we create the Todo component and pass a props object to have access to the properties

  // IMPORTANT //
  /* Ok, here we store the state in an array containing two objects, because that is waht the
  usestate function returns, modalIsOpen stores the state and setModalIsOpen changes the status
  we initially set the satus to false */
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // create event handlers
  function deleteHandler() { // this one sets the staet of modal to true
    setModalIsOpen(true);
  }

  function closeModalHandler(){ // this one sets the state modal to false
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo; // this makes the function accesible to other files
