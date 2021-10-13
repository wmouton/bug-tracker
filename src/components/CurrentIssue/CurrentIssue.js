import React, { useState } from "react";
import "./CurrentIssue.css";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const CurrentIssue = () => {
	return (
		<>
			<div className='current-issues cissues'>
				<div className='indv-issue'>
					<p className='close-issue'>
						<span>Close Issue</span>
					</p>

					<p>
						Assigned <span>Gilfoyle</span>
					</p>
					<p>
						Priority <span>High</span>
					</p>
					<p className='description-text'>Description</p>
					<p>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Minima, in voluptates porro, eligendi sint
							labore aspernatur consequuntur totam hic, laborum
							deserunt sapiente deleniti explicabo placeat modi.
							Expedita obcaecati odit animi.
						</span>
					</p>
				</div>
				<div>
					<HorizontalLine color='#cecaca' />
				</div>
			</div>

			<div className='current-issues'>
				<div className='indv-issue'>
					<p className='close-issue'>
						<span>Close Issue</span>
					</p>

					<p>
						Assigned <span>Richard</span>
					</p>
					<p>
						Priority <span>High</span>
					</p>
					<p className='description-text'>Description</p>
					<p>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Minima, in voluptates porro, eligendi sint
							labore aspernatur consequuntur totam hic, laborum
							deserunt sapiente deleniti explicabo placeat modi.
							Expedita obcaecati odit animi.
						</span>
					</p>
				</div>
				<div>
					<HorizontalLine color='#cecaca' />
				</div>
			</div>

			<div className='current-issues'>
				<div className='indv-issue'>
					<p className='close-issue'>
						<span>Close Issue</span>
					</p>

					<p>
						Assigned <span>Dinesh</span>
					</p>
					<p>
						Priority <span>Medium</span>
					</p>
					<p className='description-text'>Description</p>
					<p>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Minima, in voluptates porro, eligendi sint
							labore aspernatur consequuntur totam hic, laborum
							deserunt sapiente deleniti explicabo placeat modi.
							Expedita obcaecati odit animi.
						</span>
					</p>
				</div>
				<div>
					<HorizontalLine color='#cecaca' />
				</div>
			</div>

			<div className='current-issues'>
				<div className='indv-issue'>
					<p className='close-issue'>
						<span>Close Issue</span>
					</p>

					<p>
						Assigned <span>Jared</span>
					</p>
					<p>
						Priority <span>low</span>
					</p>
					<p className='description-text'>Description</p>
					<p>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Minima, in voluptates porro, eligendi sint
							labore aspernatur consequuntur totam hic, laborum
							deserunt sapiente deleniti explicabo placeat modi.
							Expedita obcaecati odit animi.
						</span>
					</p>
				</div>
				<div>
					<HorizontalLine color='#cecaca' />
				</div>
			</div>
		</>
	);
};

export default CurrentIssue;
