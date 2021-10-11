import React, { useState } from "react";
import "./App.css";
import AddIssue from "./components/AddIssue/AddIssue.js";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue.js";
function App() {
  const [addIssue, setAddIssue] = useState(true);
  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      {addIssue ? <AddIssue /> : <CurrentIssue />}
      <div>
        <button> Current Issues </button>
        <button> Add Issue </button>
      </div>
    </div>
  );
}

export default App;
