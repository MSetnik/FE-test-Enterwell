import React, { useEffect, useState } from "react"
import styles from "./index.module.css"
import { deleteQuiz, getQuizzes } from "../../endpoints"
import type { IQuiz } from "../../interfaces/api"
import { initData } from "../../helpers/localStorage"
import { useNavigate } from "react-router"
import CustomModal from "../../components/organisms/customModal"
import QuizTable from "../../components/organisms/quizTable"

const Home: React.FC = () => {
	const navigate = useNavigate()

	const [quizzes, setQuizzes] = useState<IQuiz[]>([])
	const [selectedQuiz, setSelectedQuiz] = useState<IQuiz | null>(null)

	const fetchQuizzes = () => {
		const quizzes = getQuizzes()
		setQuizzes(quizzes)
	}

	useEffect(() => {
		initData()
		fetchQuizzes()
	}, [])

	const deleteSelectedQuiz = ({
		e,
		quizId
	}: {
		e: React.MouseEvent
		quizId: string
	}) => {
		e.stopPropagation()

		deleteQuiz(quizId)
		window.location.reload()
	}

	const editQuiz = ({
		e,
		quizId
	}: {
		e: React.MouseEvent
		quizId: string
	}) => {
		e.stopPropagation()

		navigate(`/quizDetails/${quizId}`)
	}

	const startQuiz = ({ quizId }: { quizId: string }) => {
		document.body.requestFullscreen()

		navigate(`/${quizId}`)
	}

	return (
		<div className={`container`}>
			<div className={`${styles["home-container"]}`}>
				<button
					className={`btn btn-success ${styles["new-quiz-btn"]}`}
					onClick={() => navigate("/quizDetails/new")}
				>
					Kreiraj kviz
				</button>
				<h1>Quiz Maker</h1>
			</div>

			<QuizTable
				quizzes={quizzes}
				onStartQuiz={({ quiz }) => startQuiz({ quizId: quiz.id })}
				onEditQuiz={({ quiz, e }) => editQuiz({ e, quizId: quiz.id })}
				onDeleteQuiz={({ quiz, e }) => {
					e.stopPropagation()
					setSelectedQuiz(quiz)
				}}
			/>

			<CustomModal
				modalId="delete-quiz"
				bodyContent={
					<>
						<p>Jeste li sigurni da želite obrisati ovaj kviz?</p>
					</>
				}
				footerContent={
					<>
						<button
							className="btn btn-primary"
							data-bs-dismiss="modal"
						>
							Odustani
						</button>
						<button
							className="btn btn-outline-danger"
							onClick={(e) => {
								if (selectedQuiz) {
									deleteSelectedQuiz({
										e,
										quizId: selectedQuiz.id
									})
								}
							}}
						>
							Obriši
						</button>
					</>
				}
				title="Obriši kviz"
			/>
		</div>
	)
}

export default Home
