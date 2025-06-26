import { useEffect, useState } from "react"
import type { IQuiz } from "../../interfaces/api"
import { getQuizById } from "../../endpoints"
import { useNavigate } from "react-router"

export const useStartQuiz = (quizId: string) => {
	const navigate = useNavigate()
	const [quizData, setQuizData] = useState<IQuiz | null>(null)
	const [questionIndexToShow, setQuestionIndexToShow] = useState<number>(0)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(true)
		const quiz = getQuizById(quizId || "")

		if (!quiz) {
			navigate("/error")
			return
		}

		setQuizData(quiz)
		setIsLoading(false)
	}, [quizId, navigate])

	return {
		quizData,
		questionIndexToShow,
		setQuestionIndexToShow,
		isLoading
	}
}
