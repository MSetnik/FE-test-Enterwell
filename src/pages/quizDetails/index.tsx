import React from "react"
import QuestionsModal from "../../components/organisms/questionsModal"
import type { IQuestion, IQuiz } from "../../interfaces/api"
import { postQuestion, postQuiz, putQuiz } from "../../endpoints"
import { useNavigate, useParams } from "react-router"
import useQuizDetails from "./useQuizDetails"

const QuizDetails: React.FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const {
		title,
		selectedQuestions,
		setTitle,
		setSelectedQuestions,
		newQuestionText,
		newAnswerText,
		setNewQuestionText,
		setNewAnswerText
	} = useQuizDetails({ quizId: id || null })

	const addNewQuiz = () => {
		const QuizDetails: IQuiz = {
			id: crypto.randomUUID(),
			title,
			questions: selectedQuestions
		}

		postQuiz(QuizDetails)
		setTitle("")
		setSelectedQuestions([])
		alert("Kviz je uspješno dodan!")
		navigate("/")
	}

	const editQuiz = (quizId: string) => {
		const QuizDetails: IQuiz = {
			id: quizId,
			title: title,
			questions: selectedQuestions
		}

		putQuiz(QuizDetails)
		alert("Kviz je uspješno spremljen!")
		navigate("/")
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (id && id !== "new") {
			editQuiz(id)

			return
		}
		addNewQuiz()
	}

	const addNewQuestion = () => {
		if (!newQuestionText || !newAnswerText) return
		const newQ: IQuestion = {
			id: crypto.randomUUID(),
			question: newQuestionText,
			answer: newAnswerText
		}
		setSelectedQuestions((prev) => [...prev, newQ])
		setNewQuestionText("")
		setNewAnswerText("")
		postQuestion(newQ)
	}

	return (
		<div className="container justify-content-center pb-5 pt-5">
			<form onSubmit={handleSubmit}>
				<h2>{id !== "new" ? "Uredi kviz" : "Dodaj novi kviz"}</h2>

				<div>
					<label>Naziv:</label>
					<br />
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>

				<div className="mt-2">
					<label>Pitanja:</label>
					<br />
					<ul>
						{selectedQuestions.map((question) => (
							<li key={question.id}>
								{question.question}
								<button
									type="button"
									onClick={() =>
										setSelectedQuestions(
											selectedQuestions.filter(
												(q) => q.id !== question.id
											)
										)
									}
								>
									-
								</button>
							</li>
						))}
					</ul>
				</div>

				<div className="mt-2">
					<label>Odaberi postojeća pitanja:</label>
					<br />
					<button
						type="button"
						className="btn btn-outline-primary"
						data-bs-toggle="modal"
						data-bs-target="#question-modal"
					>
						odaberi
					</button>
				</div>

				<div className="mt-2 d-flex flex-column">
					<h5>Dodaj novo pitanje</h5>
					<input
						type="text"
						placeholder="Pitanje"
						value={newQuestionText}
						onChange={(e) => setNewQuestionText(e.target.value)}
						className="mb-1"
					/>
					<input
						type="text"
						placeholder="Odgovor"
						value={newAnswerText}
						onChange={(e) => setNewAnswerText(e.target.value)}
						className="mb-1"
					/>
					<button
						type="button"
						disabled={!newQuestionText || !newAnswerText}
						className="btn btn-primary"
						style={{ width: 150 }}
						onClick={addNewQuestion}
					>
						Dodaj pitanje
					</button>
				</div>

				<button
					type="submit"
					className="mt-5 btn btn-success"
					disabled={!title || selectedQuestions.length === 0}
				>
					{id ? "Spremi kviz" : `Dodaj kviz`}
				</button>
			</form>

			<QuestionsModal
				selectedQuestions={selectedQuestions}
				setSelectedQuestions={setSelectedQuestions}
			/>
		</div>
	)
}

export default QuizDetails
