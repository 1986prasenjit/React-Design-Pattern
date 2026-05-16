import Toggler from "./Toggler";

const ThemeToggler = () => {
  return (
    <div>
      <Toggler
        render={({ isOn, togglerStateChanger }) => (
          <div>
            <button onClick={togglerStateChanger}>
              {isOn ? "Dark Mode is ON" : "Light Mode is ON"} Message
            </button>
            {isOn ? (<p>This is Dark Mode</p>) : (<p>This is Light Mode</p>)}
          </div>
        )}
      />
    </div>
  );
};

export default ThemeToggler;
