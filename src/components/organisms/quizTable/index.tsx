import React from "react"
import type { IQuiz } from "../../../interfaces/api"
import QuizRow from "../../molecules/quizRow"

interface Props {
	quizzes: IQuiz[]
	onStartQuiz: ({ e, quiz }: { e: React.MouseEvent; quiz: IQuiz }) => void
	onDeleteQuiz: ({ e, quiz }: { e: React.MouseEvent; quiz: IQuiz }) => void
	onEditQuiz: ({ e, quiz }: { e: React.MouseEvent; quiz: IQuiz }) => void
}

const QuizTable: React.FC<Props> = ({
	quizzes,
	onStartQuiz,
	onDeleteQuiz,
	onEditQuiz
}) => {
	return (
		<table className="table table-striped">
			<thead className="text-center">
				<tr>
					<th>#</th>
					<th>Naziv kviza</th>
					<th>Akcije</th>
				</tr>
			</thead>
			<tbody>
				{quizzes.length === 0 ? (
					<tr>
						<td colSpan={3} className="text-center">
							Nema dostupnih kvizova.
						</td>
					</tr>
				) : (
					quizzes.map((quiz, index) => (
						<QuizRow
							quiz={quiz}
							index={index + 1}
							onDeleteClick={(e) => onDeleteQuiz({ quiz, e })}
							onEditClick={(e) => onEditQuiz({ quiz, e })}
							onStartClick={(e) => onStartQuiz({ quiz, e })}
						/>
					))
				)}
			</tbody>
		</table>
	)
}

export default QuizTable
