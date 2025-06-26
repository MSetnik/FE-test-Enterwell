import * as dummy from "../constants";
import type { IQuestion, IQuiz } from "../interfaces/api";

const QUESTIONS = '@questions'
const QUIZ = '@quiz'

export const setLocalstorageQuestions = (questions: IQuestion[]) => {
  localStorage.setItem(QUESTIONS, JSON.stringify(questions));
}

export const getLocalstorageQuestions = () : IQuestion[] | []  => {
  const questions = localStorage.getItem(QUESTIONS);
  return questions ? JSON.parse(questions) as IQuestion[] : []
}

export const setLocalstorageQuizes = (quizzes: IQuiz[]) => {
  localStorage.setItem(QUIZ, JSON.stringify(quizzes));
}

export const getLocalstorageQuizes = () : IQuiz[] | []  => {
  const quizes = localStorage.getItem(QUIZ);
  return quizes ? JSON.parse(quizes) as IQuiz[] : []

}


export const initData = () => {
  const questions = localStorage.getItem(QUESTIONS);
  const quizes = localStorage.getItem(QUIZ);

  if(questions === null && quizes === null) {
    setLocalstorageQuestions(dummy.questions)
    setLocalstorageQuizes(dummy.quizzes)
  }
}