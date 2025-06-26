import React from "react"
import { useNavigate } from "react-router"

const Error404: React.FC = () => {
	const navigate = useNavigate()

	return (
		<div className="container pt-5">
			<h1>Error 404</h1>
			<h2>
				Upss - Ovo nije kviz pitanje, ali odgovor definitivno nije
				ovdje.
			</h2>
			<h3>Vrati se na početak i pokušaj ponovno — bez varanja! 😉</h3>

			<button className="btn btn-primary" onClick={() => navigate("/")}>
				Početna
			</button>
		</div>
	)
}

export default Error404
