import Toggler from "./Toggler";

const UIToggler = () => {
  return (
    <div>
      <Toggler
        render={({ isOn, togglerStateChanger }) => (
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "50px",
                filter: isOn ? "grayscale(0)" : "grayscale(1)",
              }}
            >
              💡
            </div>
            <button onClick={togglerStateChanger}>
              {isOn ? "Turn Off" : "Turn On"}
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default UIToggler;
