import React, { useState } from "react";
import "./App.css";
import AddIssue from "./components/AddIssue/AddIssue";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";
function App() {
	const [addIssue, setAddIssue] = useState(true);
	return (
		<div className='App'>
			<h1>Bug Tracker</h1>
			<div className='grey-card-container'>
				{addIssue ? <AddIssue /> : <CurrentIssue />}
			</div>
			<div>
				<button>Current Issues</button>
				<button>Add Issue</button>
			</div>
		</div>
	);
}

export default App;
