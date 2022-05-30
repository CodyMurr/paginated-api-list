import { useEffect, useContext } from 'react';
import Pagination from './Pagination';
import Data from './Data';
import ApiContext from '../context/ApiContext';
const BASE_URL = 'https://api.publicapis.org';

export default function ApiList() {
	const {
		loading,
		resultsPerPage,
		setData,
		setLoading,
		setTotalPages,
		getAPIData,
	} = useContext(ApiContext);

	useEffect(() => {
		async function fetchData(endpoint) {
			setLoading(true);
			const response = await fetch(`${BASE_URL}/entries`);
			const data = await response.json();
			setData(data.entries);
			setTotalPages(Math.ceil(data.entries.length / resultsPerPage));

			setLoading(false);
		}
		fetchData();
	}, []);

	return (
		<div className='h-screen w-full flex flex-col items-center justify-evenly relative'>
			<Data />
			<Pagination />
		</div>
	);
}
