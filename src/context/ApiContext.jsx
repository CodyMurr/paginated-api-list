import { createContext, useState } from 'react';

const ApiContext = createContext();

export function ApiProvider({ children }) {
	const [data, setData] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [resultsPerPage, setResultsPerPage] = useState(5);

	const [totalPages, setTotalPages] = useState(data.length);
	const [pageNav, setPageNav] = useState(
		range(currentPage, currentPage + 5),
	);
	const [categData, setCategData] = useState([]);

	const idxOfLast = currentPage * resultsPerPage;
	const idxOfFirst = idxOfLast - resultsPerPage;
	const currentData = data.slice(idxOfFirst, idxOfLast);

	function paginate(pageNum) {
		setCurrentPage(pageNum);
		pageNum >= totalPages
			? setPageNav(range(pageNum - 5, pageNum))
			: setPageNav(range(pageNum, pageNum + 5));
	}

	function getAPIData(newData) {
		setData(newData.entries);
		setTotalPages(Math.ceil(data.entries.length / resultsPerPage));
		setLoading(false);
	}

	function getCategoryData(cats) {
		setCategories(cats.categories);
		setLoading(false);
	}

	function getApisByCat(newList) {
		setCategData(newList.entries);
		setLoading(false);
	}

	function catSort() {
		const arr = [];
		categories.forEach((cat) => {
			arr.push(cat[0]);
		});
		const catSet = new Set(arr);
		const uniqueLetterArr = Array.from(catSet);
		return uniqueLetterArr.sort();
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
				categData,
				paginate,
				getAPIData,
				getCategoryData,
				catSort,
				getApisByCat,
			}}>
			{children}
		</ApiContext.Provider>
	);
}

export default ApiContext;
