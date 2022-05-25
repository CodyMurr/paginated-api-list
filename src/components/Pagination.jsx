import {
	FaAngleLeft,
	FaAngleRight,
	FaAngleDoubleLeft,
	FaAngleDoubleRight,
} from 'react-icons/fa';

export default function Pagination({
	currentPage,
	resultsPerPage,
	totalResults,
	totalPages,
	pageNav,
	paginate,
}) {
	const pageNumbers = [];
	for (
		let i = 1;
		i <= Math.ceil(totalResults / resultsPerPage);
		i++
	) {
		pageNumbers.push(i);
	}
	return (
		<nav className='container h-16 w-full bg-orange-500 flex flex-row items-center justify-evenly items-center fixed bottom-0'>
			{currentPage > 1 && (
				<FaAngleDoubleLeft
					className='cursor-pointer'
					size={40}
					color={currentPage > 1 ? '#14213D' : '#CCCCCCaf'}
					onClick={() => paginate(1)}
				/>
			)}
			<FaAngleLeft
				className='cursor-pointer'
				size={40}
				color={currentPage > 1 ? '#14213D' : '#CCCCCCaf'}
				onClick={() => paginate(currentPage - 1)}
			/>
			<ul className='h-full w-9/12 flex flex-row justify-evenly items-center'>
				{pageNav.map((num) => (
					<li
						key={num}
						className={
							num === currentPage &&
							' flex flex-row justify-center items-center bg-slate-900 text-xl text-slate-100 border-solid rounded-2xl border-slate-700 shadow-md w-1/12 h-full'
						}>
						<a href='!#' onClick={() => paginate(num)}>
							{num}
						</a>
					</li>
				))}
			</ul>

			<FaAngleRight
				className='cursor-pointer'
				size={40}
				color={currentPage <= totalPages ? '#14213D' : '#534D56'}
				onClick={() => paginate(currentPage + 1)}
			/>
			{currentPage < totalPages && (
				<FaAngleDoubleRight
					className='cursor-pointer'
					size={40}
					color={currentPage <= totalPages ? '#14213D' : '#534D56'}
					onClick={() => paginate(totalPages)}
				/>
			)}
		</nav>
	);
}