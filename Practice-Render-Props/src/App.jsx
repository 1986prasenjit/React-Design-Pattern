import { useState } from "react";
import TogglerComponent from "./components/TogglerComponent";


function App() {
  const [name] = useState("Ram");
  return (
    <>
      <TogglerComponent render={({showText, togglerStateChanger})=> (
        <section className="flex items-center justify-center flex-col w-full h-screen gap-2 bg-gray-600">
        <button
          onClick={togglerStateChanger}
          className="border-2 border-black px-4 py-2 w-75 rounded-md bg-rose-500 text-white"
        >
          Show Name
        </button>
        <h1 className="text-3xl text-white font-bold">{showText && name}</h1>
      </section>
      )} />
    </>
  );
}

export default App;
