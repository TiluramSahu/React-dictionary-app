import { createContext, useState } from "react";
import Header from "./Components/Header";
import ResultList from "./Components/ResultList";

// Create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState(" ");

  const value = {
    inputValue,
    setInputValue,
  };
  return (
    <>
      <InputContext.Provider value={value}>
        <div className="app">
          <Header />
          <ResultList />
        </div>
      </InputContext.Provider>
    </>
  );
}

export default App;
