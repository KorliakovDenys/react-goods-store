import {useParams} from "react-router-dom";

const CategoryPage = () => {
	const {id} = useParams();
	return (
		<div>
			Category {id}
		</div>
	);
};

export default CategoryPage;
