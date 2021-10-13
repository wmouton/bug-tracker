import React from "react";

const HorizontalLine = ({ color }) => {
	return (
		<div>
			<hr
				style={{
					color,
					backgroundColor: color,
					height: 1,
                    marginTop: '20px',
                    marginBottom: '8px'
				}}
			/>
		</div>
	);
};

export default HorizontalLine;
