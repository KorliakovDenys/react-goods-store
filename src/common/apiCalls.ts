import {ProductInfo, ProductsObject} from "../def/generalDefs.ts";

const getProductsData = async ():Promise<ProductInfo[]> => {
	const response = await fetch("https://dummyjson.com/products?limit=0");
	if (!response.ok) return [];
	try {
		const data:ProductsObject = await response.json();
		return data.products;
	} catch {
		console.log("unable to convert recieved data to json format");
		return []
	}
}

export {getProductsData};