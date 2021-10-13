import React, { useState } from "react";
import "./CurrentIssue.css";

const CurrentIssue = () => {
	return (
		<div className='current-issues'>
			<div className='indv-issue'>
				<p className='close-issue'><span>Close Issue</span></p>

				<p>
					Assigned <span>Username</span>
				</p>
				<p>
					Priority <span>High</span>
				</p>
				<p className='description-text'>Description</p>
				<p>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minima, in voluptates porro, eligendi sint labore
						aspernatur consequuntur totam hic, laborum deserunt
						sapiente deleniti explicabo placeat modi. Expedita
						obcaecati odit animi.
					</span>
				</p>
			</div>
		</div>
	);
};

export default CurrentIssue;
