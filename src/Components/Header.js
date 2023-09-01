import React, { useContext, useState } from "react";
import { InputContext } from "../App";

const Header = () => {
  const [value, setValue] = useState(" ");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue(" ");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value);
      setValue(" ");
    }
  };

  return (
    <div className="bg-[#0284c7]">
      <div className="container mx-auto py-6 ">
        <h1 className="text-4xl text-center font-bold text-white">
          Lexico Word Hunter
        </h1>
        <p className="text-center text-lg mt-2 mb-7 text-slate-950">
          A Dictionary App created using React JS
        </p>
        <div className="flex items-center justify-center mt-5">
          <div className="flex border-2 border-gray-200 rounded">
            <input
              className="px-4 py-2 md:w-80"
              type="text"
              placeholder="search your word..."
              onChange={handleInputChange}
              value={value}
              onKeyDown={handleInputKeyDown}
            />
            <button
              className="bg-sky-700 border-x px-4 py-2 text-white hover:bg-green-400"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
        {inputValue && (
          <h3 className="text-gray-50 text-center mt-4 ">
            Results for:{" "}
            <span className="text-green-400 font-bold">{inputValue}</span>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Header;
