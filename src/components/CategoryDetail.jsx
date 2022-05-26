import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import { fetchData } from '../utilities/api';

export default function CategoryDetail() {
	const { categData, getApisByCat } = useContext(ApiContext);
	const { category } = useParams();

	useEffect(() => {
		fetchData(
			`entries?category=${category.toLowerCase()}`,
			getApisByCat,
		);
	}, [getApisByCat, category]);
	return (
		<div>
			{categData.map((cat) => (
				<section key={cat.API}>{cat.API}</section>
			))}
		</div>
	);
}
