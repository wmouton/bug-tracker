import React, { useState } from "react";

const AddIssue = () => {
	const [addIssue, setAddIssue] = useState(true);
	return (
		<>
			<h1>Add Issue</h1>
			<form action=''>
				<label>
					Description: <input type='text' />{" "}
				</label>
				<label>
					Assign To:{" "}
					<select name='wmDev' id='wmDev'>
						<option value='Richard'>Richard</option>
						<option value='Gilfoyle'>Gilfoyle</option>
						<option value='Dinesh'>Dinesh</option>
						<option value='BigHead'>BigHead</option>
						<option value='Erlick'>Erlick</option>
						<option value='Jian'>Jian</option>
						<option value='Jared'>Jared</option>
						<option value='Morena'>Morena</option>
					</select>{" "}
				</label>
				<label>
					Priority Level:{" "}
					<select name='priority' id='priority'>
						<option value='Low'>Low</option>
						<option value='Medium'>Medium</option>
						<option value='High'>High</option>
						<option value='Critical'>Critical</option>
					</select>
				</label>
				<button type='submit'>Add Issue</button>
			</form>
		</>
	);
};

export default AddIssue;
