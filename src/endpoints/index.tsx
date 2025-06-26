import {
	getLocalstorageQuestions,
	getLocalstorageQuizes,
	setLocalstorageQuestions,
	setLocalstorageQuizes
} from "../helpers/localStorage"
import type { IQuestion, IQuiz } from "../interfaces/api"

export const getQuizzes = (): IQuiz[] => {
	return getLocalstorageQuizes()
}

export const getQuizById = (quizId: string): IQuiz | null => {
	const quizzes = getLocalstorageQuizes()
	return quizzes.find((quiz) => quiz.id === quizId) || null
}

export const postQuiz = (quiz: IQuiz): void => {
	const quizzes = getLocalstorageQuizes() as IQuiz[]
	quizzes.push(quiz)
	setLocalstorageQuizes(quizzes)
}

export const putQuiz = (quiz: IQuiz): void => {
	const quizzes = getLocalstorageQuizes() as IQuiz[]
	const existingIndex = quizzes.findIndex((q) => q.id === quiz.id)

	if (existingIndex !== -1) {
		quizzes[existingIndex] = quiz
		setLocalstorageQuizes(quizzes)
	}
}

export const deleteQuiz = (id: string): void => {
	const quizzes = getLocalstorageQuizes() as IQuiz[]
	const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== id)
	setLocalstorageQuizes(updatedQuizzes)
}

export const getQuestions = (): IQuestion[] => {
	return getLocalstorageQuestions()
}

export const postQuestion = (question: IQuestion): void => {
	const questions = getLocalstorageQuestions() as IQuestion[]
	questions.push(question)
	setLocalstorageQuestions(questions)
}
