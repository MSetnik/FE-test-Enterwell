import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"
import { router } from "./router/index.tsx"
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./main.css"

createRoot(document.getElementById("root")!).render(
	<div id="root-content" className="bg-light">
		<RouterProvider router={router} />
	</div>
)
