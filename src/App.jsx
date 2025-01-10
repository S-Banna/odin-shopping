import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./NavBar/NavBar.jsx";
import Cart from "./Cart/Cart.jsx";
import { Outlet } from "react-router-dom";

function App() {
	const [data, setData] = useState("Loading...");
	const [cart, setCart] = useState(false);

	function toggleCart() {
		setCart(!cart);
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetch(
					"https://fakestoreapi.com/products?limit=15"
				).then(async (res) => await res.json());
				setData(data);
				console.log(data);
			} catch (error) {
				setData(error.message);
			}
		}

		fetchData();
	}, []);

	if (typeof data === "string") return <h1>{data}</h1>;
	else
		return (
			<div className="cont">
				<NavBar toggleCart={() => toggleCart()} />
				{cart && <Cart />}
				<Outlet />
			</div>
		);
}

export { App };
