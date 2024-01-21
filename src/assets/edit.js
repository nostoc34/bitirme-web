import * as React from "react";
const Edit = ({ size = 30, color = "#fff", ...props }) => {
	const pathScale = 30 / size;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			fill="none"
			{...props}
		>
			<path
				fill="none"
				stroke={color}
				transform={`scale(${1 / pathScale})`}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="m5 16-1 4 4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"
			/>
		</svg>
	);
};
export default Edit;
