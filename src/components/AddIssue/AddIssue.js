import React, { useState } from "react";

const AddIssue = () => {
	const [addIssue, setAddIssue] = useState(true);
	return (
		<>
			<div>
				<h1>Add Issue</h1>
				<label>
					Description <input type='text' />{" "}
				</label>
                <label>
                
				<select name='wmDev' id='wmDev'>
					<option value='Richard'>Richard</option>
					<option value='Gilfoyle'>Gilfoyle</option>
					<option value='Dinesh'>Dinesh</option>
					<option value='BigHead'>BigHead</option>
					<option value='Erlick'>Erlick</option>
					<option value='Jian'>Jian</option>
					<option value='Jared'>Jared</option>
					<option value='Morena'>Morena</option>
				</select>
                </label>
			</div>
		</>
	);
};

export default AddIssue;
