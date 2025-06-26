export interface IQuestion {
	id: string
	question: string
	answer: string
}

export interface IQuiz {
	id: string
	title: string
	questions: IQuestion[]
}
