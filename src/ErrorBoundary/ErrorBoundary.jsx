import { Link } from "react-router-dom";

export default function ErrorBoundary() {
	return (
		<div>
			<h1>Oops!</h1>
			<h2>Looks like an error was encountered.</h2>
			<Link to="/">Click here to go back home, or try reloading the site.</Link>
		</div>
	);
}
