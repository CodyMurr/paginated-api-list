import { useEffect, useContext } from 'react';
import Pagination from './Pagination';
import Data from './Data';
import ApiContext from '../context/ApiContext';
import Dropdown from '../custom/Dropdown';
const BASE_URL = 'https://api.publicapis.org/entries';

export default function ApiList() {
	const {
		loading,
		resultsPerPage,
		setData,
		setLoading,
		setTotalPages,
		stepArray,
		changePgSize,
	} = useContext(ApiContext);

	useEffect(() => {
		async function fetchData(endpoint) {
			setLoading(true);
			const response = await fetch(BASE_URL);
			const data = await response.json();
			setData(data.entries);
			setTotalPages(Math.ceil(data.entries.length / resultsPerPage));

			setLoading(false);
		}
		fetchData();
	}, []);

	if (loading) return <h2>Loading...</h2>;

	return (
		<div className='w-full h-full flex flex-col items-center relative'>
			<Dropdown
				options={stepArray(5, 20, 5)}
				default={resultsPerPage}
				message='Results Per Page'
			/>
			<section className='w-full flex flex-wrap justify-evenly'>
				<Data />
			</section>
			<Pagination />
		</div>
	);
}
