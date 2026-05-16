import React, { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)} 
        className="border-2 border-black px-4 py-2 text-red-500"
        type="text"
        placeholder="Enter your name"
        value={inputValue}
      />
      <p className="text-2xl font-bold text-blue-600">Your name is: {inputValue}</p>
    </div>
  );
};

export default Input;
