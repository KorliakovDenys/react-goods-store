import './styles/product-view.css'
import {ProductInfo} from '../def/generalDefs.ts';
import {formatToMoney} from '../utils/stringFormatters.ts';

const ProductView = ({product}:{ product:ProductInfo }) => {
	const price = formatToMoney(String(product.price));
	return (
		<div className='product-view'>
			<div className='product-price'>{price}</div>
			<img className='product-image' src={product.thumbnail} alt='no image'/>
			<div>{product.title}</div>
			<div className='add-to-cart-button'>Add to cart</div>
		</div>
	);
};

export default ProductView;
