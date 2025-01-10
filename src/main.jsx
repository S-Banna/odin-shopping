import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import Home from "./Home/Home.jsx";
import Shop from "./Shop/Shop.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
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
