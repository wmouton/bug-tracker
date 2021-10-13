import React, { useState } from "react";
import "./App.css";
import AddIssue from "./components/AddIssue/AddIssue";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";
import logo from "./logo/logo.png";

function App() {
	const [addIssue, setAddIssue] = useState(false);
	return (
		<div className='App'>
			<div className='logo'>
				<img className='logo' src={logo} alt='logo' />
			</div>
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
