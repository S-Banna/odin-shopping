import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./NavBar/NavBar.jsx";
import Cart from "./Cart/Cart.jsx";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Loading from "./Loading/Loading.jsx";

function App() {
	const [data, setData] = useState("Loading");
	const [cart, setCart] = useState(false);
	const [images, setImages] = useState(null);

	function toggleCart() {
		setCart(!cart);
	}

	function arrangeData(data) {
		const arr = [];
		data.forEach((itemObj) => {
			arr.push({
				item: itemObj.title,
				price: itemObj.price,
				image: itemObj.image,
			});
		});
		setImages(data.slice(6, 10));
		return arr;
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const dataFetch = await fetch(
					"https://fakestoreapi.com/products?limit=15",
				).then(async (res) => await res.json());
				setData(arrangeData(dataFetch));
			} catch (error) {
				setData(error.message);
			}
		}

		fetchData();
	}, []);

	if (data === "Loading") return <Loading />;
	if (typeof data === "string") return <h1>{data + " Please try refreshing, the API might be down."}</h1>;
	else
		return (
			<div className={styles.cont}>
				<NavBar toggleCart={() => toggleCart()} toggled={cart} />
				{cart && <Cart />}
				<Outlet context={[images, data]} />
			</div>
		);
}

export { App };
