import * as React from "react";
const Unfollow = ({ size = 30, color = "#fff", ...props }) => {
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
				d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m7 6.586 2.121-2.121 1.415 1.414L20.414 19l2.121 2.121-1.414 1.415L19 20.414l-2.121 2.121-1.415-1.414L17.587 19l-2.121-2.121 1.414-1.415z"
			/>
		</svg>
	);
};
export default Unfollow;
