import './App.css';
import { useState, useEffect } from 'react';
import { fetchData } from './utilities/api';
import Pagination from './components/Pagination';
import Data from './components/Data';

export default function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [resultsPerPage, setResultsPerPage] = useState(5);

	const [totalPages, setTotalPages] = useState(data.length);
	const [pageNav, setPageNav] = useState(
		range(currentPage, currentPage + 5),
	);

	useEffect(() => {
		fetchData(
			'entries',
			setLoading,
			setData,
			setTotalPages,
			resultsPerPage,
		);
	}, [resultsPerPage]);

	const idxOfLast = currentPage * resultsPerPage;
	const idxOfFirst = idxOfLast - resultsPerPage;
	const currentData = data.slice(idxOfFirst, idxOfLast);

	function paginate(pageNum) {
		setCurrentPage(pageNum);
		pageNum >= totalPages
			? setPageNav(range(pageNum - 5, pageNum))
			: setPageNav(range(pageNum, pageNum + 5));
	}

	function range(start, end) {
		let length = end - start + 1;
		return Array.from({ length }, (_, idx) => idx + start);
	}
	return (
		<div className='container h-screen w-full flex flex-col items-center justify-evenly relative'>
			<Data data={currentData} loading={loading} />
			<Pagination
				currentPage={currentPage}
				resultsPerPage={resultsPerPage}
				totalResults={data.length}
				totalPages={totalPages}
				pageNav={pageNav}
				paginate={paginate}
			/>
		</div>
	);
}
