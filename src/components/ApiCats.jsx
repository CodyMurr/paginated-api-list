import { useEffect, useContext } from 'react';
import ApiContext from '../context/ApiContext';

const BASE_URL = 'https://api.publicapis.org/categories';

export default function ApiCats() {
	const { loading, categories, setLoading, setCategories } =
		useContext(ApiContext);
	useEffect(() => {
		async function fetchCategories() {
			setLoading(true);
			const res = await fetch(BASE_URL);
			const data = await res.json();
			setCategories(data.categories);
			setLoading(false);
		}
		fetchCategories();
	}, []);

	function catSort() {
		const arr = [];
		categories.forEach((cat) => {
			arr.push(cat[0]);
		});
		const catSet = new Set(arr);
		const uniqueLetterArr = Array.from(catSet);
		return uniqueLetterArr.sort();
	}

	const sortedCats = catSort();

	if (loading) return <h2>Loading...</h2>;

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
								<a href='!#' rel='noreferrer' target='_blank'>
									<li className='text-2xl m-10' key={cat}>
										{cat}
									</li>
								</a>
							))}
					</ul>
				</section>
			))}
		</section>
	);
}
