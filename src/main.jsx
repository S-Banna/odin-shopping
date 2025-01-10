import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import { Navigate } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Shop from "./Shop/Shop.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Navigate to="/home" replace />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},
		],
	},
]);

export default router;

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
