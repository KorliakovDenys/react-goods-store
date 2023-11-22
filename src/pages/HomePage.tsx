import {useEffect, useState} from "react";
import {ProductInfo} from "../def/generalDefs.ts";
import {getProductsData} from "../common/apiCalls.ts";
import ProductListView from "../components/ProductListView.tsx";

const HomePage = () => {
	const [products, setProducts] = useState<ProductInfo[]>([]);
	useEffect(() => {
		getProductsData().then((result) => setProducts(result));
	}, []);

	return (
		<ProductListView products={products}/>
	);
};

export default HomePage;
