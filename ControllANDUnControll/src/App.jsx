import { useState, useRef, useEffect,  } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    console.log(name, email, password);
  }

  function focusHandler() {
    inputRef.current.focus();
  }
  useEffect(() => {
    focusHandler();
  }, []);

  return (
    <>
      <form
        className="flex flex-col gap-4 border w-2/6 m-auto mt-10 p-4"
        onSubmit={submitHandler}
      >
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 px-2 py-2 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={inputRef}
        />

        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 px-2 py-2 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="border border-gray-300 px-2 py-2 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="m-auto w-3/12">
          <button
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4 border w-2/6 m-auto mt-10 p-4">
        <p className="text-6xl text-red-700 font-extrabold">{name}</p>
        <p className="text-6xl text-red-700 font-extrabold">{email}</p>
        <p className="text-6xl text-red-700 font-extrabold">{password}</p>
      </div>
    </>
  );
};

export default App;

//!What is the difference between controlled and uncontrolled components?

//* Controlled Components
//* Uncontrolled Components

//* Controlled Components:
//* Components whose form data is controlled by React state. React becomes the single source of truth, and updates happen through state and event handlers like onChange.

//* Uncontrolled Components:
//* Components whose form data is managed by the DOM itself. React does not control the value directly, and data is usually accessed using refs.
