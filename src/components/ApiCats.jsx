import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../utilities/api';
import ApiContext from '../context/ApiContext';

export default function ApiCats() {
	const { categories, getCategoryData, catSort } =
		useContext(ApiContext);
	useEffect(() => {
		fetchData('categories', getCategoryData);
	});

	const sortedCats = catSort();

	return (
		<section className='grid grid-cols-4 w-full h-max'>
			{sortedCats.map((c) => (
				<section className='flex flex-col items-center m-10' key={c}>
					<h4 className=' w-full bg-blue-900 text-orange-500 text-xl font-bold rounded flex justify-center'>
						{c}
					</h4>

					<ul className='list-none flex flex-col items-center'>
						{categories
							.filter(
								(cat) => cat[0].toLowerCase() === c.toLowerCase(),
							)
							.map((cat) => (
								<Link to={`/api/categories/${cat}`}>
									<li className='text-2xl m-10' key={cat}>
										{cat}
									</li>
								</Link>
							))}
					</ul>
				</section>
			))}
		</section>
	);
}
