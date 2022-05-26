import { useState, useEffect, useContext } from 'react';
import { fetchData } from '../utilities/api';
import Pagination from './Pagination';
import Data from './Data';
import ApiContext from '../context/ApiContext';

export default function ApiList() {
	const { getAPIData } = useContext(ApiContext);

	useEffect(() => {
		fetchData('entries', getAPIData);
	}, [getAPIData]);

	return (
		<div className='container h-screen w-full flex flex-col items-center justify-evenly relative'>
			<Data />
			<Pagination />
		</div>
	);
}
