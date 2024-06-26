import * as React from "react";
const Message = ({ size = 30, color = "#fff", ...props }) => {
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
				fill={color}
				transform={`scale(${1 / pathScale})`}
				d="M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-4.414L12 18.586 9.414 16H5V4h14z"
			/>
		</svg>
	);
};
export default Message;
