import React from "react"

interface Props {
	text: string
	checked: boolean
	onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const QuestionSelect: React.FC<Props> = ({ text, onSelect, checked }) => {
	return (
		<div>
			<input
				type="checkbox"
				onChange={(e) => onSelect(e)}
				checked={checked}
			/>
			<label>{text}</label>
		</div>
	)
}

export default QuestionSelect
