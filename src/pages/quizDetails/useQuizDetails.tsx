import { useEffect, useState } from "react"
import type { IQuestion } from "../../interfaces/api"
import { getQuizById } from "../../endpoints"

interface Props {
	quizId: string | null
}

const useQuizDetails = ({ quizId }: Props) => {
	const [title, setTitle] = useState("")
	const [selectedQuestions, setSelectedQuestions] = useState<IQuestion[]>([])
	const [newQuestionText, setNewQuestionText] = useState("")
	const [newAnswerText, setNewAnswerText] = useState("")

	useEffect(() => {
		if (quizId && quizId !== "new") {
			const selectedQuiz = getQuizById(quizId)

			if (selectedQuiz) {
				setTitle(selectedQuiz.title)
				setSelectedQuestions(selectedQuiz.questions)
			}
		}
	}, [quizId])

	return {
		title,
		selectedQuestions,
		newQuestionText,
		newAnswerText,
		setTitle,
		setSelectedQuestions,
		setNewQuestionText,
		setNewAnswerText
	}
}

export default useQuizDetails
