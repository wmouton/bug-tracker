import React, { useState } from "react";

const CurrentIssue = () => {
	return (
		<div className='current-issues'>
			<div>
				<p>
					Assigned <span>Username</span>
				</p>
				<p>
					Priority <span>High</span>
				</p>
				<p>Description</p>
			</div>
		</div>
	);
};

export default CurrentIssue;
