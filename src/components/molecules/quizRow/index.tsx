import React from "react"
import EditIcon from "../../atoms/editIcon"
import XIcon from "../../atoms/xIcon"
import type { IQuiz } from "../../../interfaces/api"

interface Props {
	index: number
	quiz: IQuiz
	onStartClick: (e: React.MouseEvent) => void
	onDeleteClick: (e: React.MouseEvent) => void
	onEditClick: (e: React.MouseEvent) => void
}

const QuizRow: React.FC<Props> = ({
	quiz,
	index,
	onStartClick,
	onDeleteClick,
	onEditClick
}) => {
	return (
		<tr key={quiz.id} onClick={onStartClick} className="text-center">
			<td>{index}</td>
			<td>{quiz.title}</td>
			<td>
				<EditIcon
					stroke="#0d6efd"
					onClick={onEditClick}
					className="me-2"
				/>
				<XIcon
					stroke="#b02a37"
					onClick={onDeleteClick}
					data-bs-toggle="modal"
					data-bs-target="#delete-quiz"
				/>
			</td>
		</tr>
	)
}

export default QuizRow
