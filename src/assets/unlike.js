import * as React from "react";
const Unlike = ({ size = 30, color = "#fff", ...props }) => {
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
			<defs>
				<mask id="a">
					<g fill="none">
						<path
							fill="#fff"
							stroke="#fff"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={4}
                            transform={`scale(${1 / pathScale})`}
							d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
						/>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="m28 20-8 8z"
							clipRule="evenodd"
                            transform={`scale(${1 / pathScale})`}
						/>
						<path
							stroke={color}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={4}
                            transform={`scale(${1 / pathScale})`}
							d="m28 20-8 8"
						/>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="m20 20 8 8z"
							clipRule="evenodd"
                            transform={`scale(${1 / pathScale})`}
						/>
						<path
							stroke={color}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={4}
                            transform={`scale(${1 / pathScale})`}
							d="m20 20 8 8"
						/>
					</g>
				</mask>
			</defs>
			<path fill="currentColor" d="M0 0h48v48H0z" mask="url(#a)" />
		</svg>
	);
};
export default Unlike;
