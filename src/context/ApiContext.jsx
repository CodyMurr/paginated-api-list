import { createContext, useState } from 'react';

const ApiContext = createContext();

export function ApiProvider({ children }) {
	const [data, setData] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [resultsPerPage, setResultsPerPage] = useState(5);
	const [totalPages, setTotalPages] = useState();

	const [pageNav, setPageNav] = useState(
		range(currentPage, currentPage + 5),
	);
	// const [categData, setCategData] = useState([]);

	const idxOfLast = currentPage * resultsPerPage;
	const idxOfFirst = idxOfLast - resultsPerPage;
	const currentData = data.slice(idxOfFirst, idxOfLast);

	function paginate(pageNum, sibCt) {
		setCurrentPage(pageNum);

		setPageNav(range(pageNum, pageNum + sibCt));

		if (pageNum >= totalPages - sibCt && pageNum <= totalPages) {
			setPageNav(range(totalPages - sibCt, totalPages));
		}
	}

	function range(start, end) {
		let length = end - start + 1;
		return Array.from({ length }, (_, idx) => idx + start);
	}

	return (
		<ApiContext.Provider
			value={{
				data,
				loading,
				currentPage,
				resultsPerPage,
				totalPages,
				pageNav,
				idxOfFirst,
				idxOfLast,
				currentData,
				categories,
				setData,
				setLoading,
				setTotalPages,
				setCategories,
				paginate,
			}}>
			{children}
		</ApiContext.Provider>
	);
}

export default ApiContext;
