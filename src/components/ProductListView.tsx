import _ from "lodash";
import ProductView from "./ProductView.tsx";
import {ProductInfo} from "../def/generalDefs.ts";

const ProductListView = ({products}:{ products:ProductInfo[] }) => {
	return (
		<div>
			{products.length > 0 &&
				_.map(products, (prod) => (
					<div>
						<ProductView product={prod}/>
					</div>
				))}
			{products.length === 0 && <div>Loading data...</div>}
		</div>
	);
};

export default ProductListView;
