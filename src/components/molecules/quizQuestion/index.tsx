import React, { useState } from "react"

interface Props {
	question: string
	answer: string
}

const QuizQuestion: React.FC<Props> = ({ question, answer }) => {
	const [showAnswer, setShowAnswer] = useState<boolean>(false)

	return (
		<div className="container">
			<h2>{question}</h2>
			<div>
				{showAnswer ? (
					<h2>{answer}</h2>
				) : (
					<button
						className="btn btn-success"
						onClick={() => setShowAnswer(true)}
					>
						Otkrij odgovor
					</button>
				)}
			</div>
		</div>
	)
}

export default QuizQuestion
