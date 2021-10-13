import React, { useState } from "react";
import "./App.css";
import AddIssue from "./components/AddIssue/AddIssue";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";
function App() {
	const [addIssue, setAddIssue] = useState(false);
	return (
		<div className='App'>
			<h1>Bug Tracker</h1>
			<div className='grey-card-container'>
				{addIssue ? <AddIssue /> : <CurrentIssue />}
			</div>
			<div className='view-selection-div'>
				<button className='view-button'>Current Issues</button>{" "}
				<button className='view-button active-button'>Add Issue</button>
			</div>
		</div>
	);
}

export default App;
