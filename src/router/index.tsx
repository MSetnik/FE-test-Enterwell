import { createBrowserRouter } from "react-router"
import Home from "../pages/home"
import StartQuiz from "../pages/startQuiz"
import QuizDetails from "../pages/quizDetails"
import Error404 from "../pages/404Error"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/:quizId",
		element: <StartQuiz />
	},
	{
		path: "/quizDetails/:id",
		element: <QuizDetails />
	},
	{
		path: "*", // Fallback ruta za sve ostale URL-ove
		element: <Error404 />
	},
	{
		path: "/error", // Fallback ruta za sve ostale URL-ove
		element: <Error404 />
	}
])
