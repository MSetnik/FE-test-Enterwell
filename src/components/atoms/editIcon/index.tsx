import React, { type SVGProps } from "react"

const EditIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M13.8787 3.70711C15.0503 2.53554 16.9497 2.53553 18.1213 3.70711L20.2929 5.87868C21.4645 7.05026 21.4645 8.94975 20.2929 10.1213L9.70711 20.7071C9.51957 20.8946 9.26522 21 9 21H4C3.44772 21 3 20.5523 3 20V15C3 14.7348 3.10536 14.4804 3.29289 14.2929L13.8787 3.70711ZM16.7071 5.12132C16.3166 4.7308 15.6834 4.7308 15.2929 5.12132L14.4142 6L18 9.58579L18.8787 8.70711C19.2692 8.31658 19.2692 7.68342 18.8787 7.2929L16.7071 5.12132ZM16.5858 11L13 7.41421L5 15.4142V19H8.58579L16.5858 11Z"
				fill={props.stroke}
			/>
		</svg>
	)
}

export default EditIcon
