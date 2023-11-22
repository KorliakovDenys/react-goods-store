export type ProductInfo = {
	id:number;
	title:string;
	description:string;
	price:number;
	discountPercentage:number;
	rating:number;
	stock:number;
	brand:string;
	category:string;
	thumbnail:string;
	images:string[];
};

export type ProductsObject = {
	products:ProductInfo[];
	total:number;
	skip:number;
	limit:number;
};
