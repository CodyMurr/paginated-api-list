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

	const idxOfLast = currentPage * resultsPerPage;
	const idxOfFirst = idxOfLast - resultsPerPage;
	const currentData = data.slice(idxOfFirst, idxOfLast);

	function paginate(pageNum) {
		setCurrentPage(pageNum);
		setPageNav(range(pageNum, pageNum + 10));

		if (pageNum >= totalPages - 10 && pageNum <= totalPages) {
			setPageNav(range(totalPages - 10, totalPages));
		}
	}

	function range(start, end) {
		let length = end - start + 1;
		return Array.from({ length }, (_, idx) => idx + start);
	}

	function stepArray(start, end, step) {
		return Array.from(
			{ length: (end - start) / step + 1 },
			() => (start += step) - step,
		);
	}

	function changePgSize(newAmt) {
		setResultsPerPage(newAmt);
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
				range,
				stepArray,
				changePgSize,
			}}>
			{children}
		</ApiContext.Provider>
	);
}

export default ApiContext;
