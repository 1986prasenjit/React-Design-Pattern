import ModalPattern from "./components/ModalPattern";

const App = () => {
  return (
    <>
      <ModalPattern>
        <ModalPattern.Title>
          <h2>Delete Modal</h2>
        </ModalPattern.Title>
        <ModalPattern.Text>
          <p>Are you sure you want to delete this</p>
        </ModalPattern.Text>
        <ModalPattern.Button>
          Yes
        </ModalPattern.Button>
      </ModalPattern>
    </>
  );
};

export default App;
