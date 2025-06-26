import React from "react"
import styles from "./index.module.css"
import { useNavigate, useParams } from "react-router"
import QuizQuestion from "../../components/molecules/quizQuestion"
import { useStartQuiz } from "./useStartQuiz"

const StartQuiz: React.FC = () => {
	const navigate = useNavigate()
	const { quizId } = useParams()

	const { questionIndexToShow, setQuestionIndexToShow, isLoading, quizData } =
		useStartQuiz(quizId || "")

	const endQuiz = () => {
		if (document.fullscreenElement) {
			document.exitFullscreen()
		}

		navigate("/")
	}

	const nextQuestion = () => {
		if (quizData && questionIndexToShow < quizData.questions.length - 1) {
			setQuestionIndexToShow(questionIndexToShow + 1)
		}
	}

	const previousQuestion = () => {
		if (questionIndexToShow > 0) {
			setQuestionIndexToShow(questionIndexToShow - 1)
		}
	}

	const renderButtons = () => {
		return (
			<div className={styles["quiz-buttons-container"]}>
				{quizData &&
				questionIndexToShow <= quizData.questions.length - 1 ? (
					questionIndexToShow > 0 && (
						<button
							className="btn btn-outline-primary"
							onClick={previousQuestion}
						>
							Prethodno
						</button>
					)
				) : (
					<div />
				)}

				{quizData &&
				questionIndexToShow === quizData.questions.length - 1 ? (
					<button
						className="btn btn-outline-success"
						onClick={endQuiz}
					>
						Završi
					</button>
				) : (
					<div />
				)}

				{quizData &&
				questionIndexToShow >= 0 &&
				questionIndexToShow < quizData.questions.length - 1 ? (
					<button className="btn btn-primary" onClick={nextQuestion}>
						Slijedeće
					</button>
				) : (
					<div />
				)}
			</div>
		)
	}

	const renderQuestionsByIndex = (index: number) => {
		const question = quizData?.questions.find(
			(question) => question.id === quizData.questions[index].id
		)

		if (question) {
			return (
				<QuizQuestion
					key={question.id}
					question={question.question}
					answer={question.answer}
				/>
			)
		}
	}

	if (isLoading) {
		return <div>...Učitavanje</div>
	}

	return (
		<div className="container pt-5">
			{renderButtons()}
			<div className={styles["question-container"]}>
				{renderQuestionsByIndex(questionIndexToShow)}
			</div>
		</div>
	)
}

export default StartQuiz
