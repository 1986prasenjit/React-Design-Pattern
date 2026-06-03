import React from "react";
//import MessyModal from "./components/MessyComponents/MessyModal";
import Modal from "./components/Modal-With-Pattern/Modal";
import Accordion from "./components/AccordianComponent/Accordian";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function onClickHandler() {
    setIsOpen((prevValue) => !prevValue);
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col w-full h-screen gap-2 bg-gray-600">
        {isOpen ? (
          <button
            onClick={onClickHandler}
            className="border-2 border-black px-4 py-2 w-75 rounded-md bg-rose-500 text-white"
          >
            Close Modal
          </button>
        ) : (
          <button
            onClick={onClickHandler}
            className="border-2 border-black px-4 py-2 w-75 rounded-md bg-rose-500 text-white"
          >
            Open Modal
          </button>
        )}
        {isOpen && (
          <Modal>
            <Modal.Header>
              <h1>Are you sure you want to delete this</h1>
              <h1>Are you sure you want to delete this</h1>
              <h1>Are you sure you want to delete this</h1>
              <h1>Are you sure you want to delete this</h1>
              <h1>Are you sure you want to delete this</h1>
              <h1>Are you sure you want to delete this</h1>
            </Modal.Header>
            <Modal.Description>
              <Accordion />
            </Modal.Description>
            <Modal.Footer>
              <button className="border-2 border-black px-4 py-2 w-75 rounded-md bg-rose-500 text-white">
                Delete Modal
              </button>
              <button className="border-2 border-black px-4 py-2 w-75 rounded-md bg-rose-500 text-white">
                Close
              </button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </>
  );
};

export default App;
