export default function CategoryDetail({ cat, toggleModal }) {
	return (
		<div className='flex flex-col items-center justify-between h-full'>
			<h3 className='text-3xl'>{cat.API}</h3>
			<span className='text-xl w-1/2 flex justify-between'>
				<strong>Description:</strong>
				<p>{cat.Description}</p>
			</span>
			<span className='text-xl w-1/2 flex justify-between'>
				<strong>Auth:</strong>
				<p>{cat.Auth ? cat.Auth : 'N/a'}</p>
			</span>
			<span className='text-xl w-1/2 flex justify-between'>
				<strong>HTTP:</strong>
				<p>{JSON.stringify(cat.HTTP)}</p>
			</span>
			<span className='text-xl w-1/2 flex justify-between'>
				<strong>Cors:</strong>
				<p>{cat.Cors}</p>
			</span>
			<span className='text-xl w-1/2 flex justify-between'>
				<strong>Link:</strong>
				<a href={cat.Link} rel='noreferrer' target='_blank'>
					{cat.Link}
				</a>
			</span>
			<span className='text-xl w-1/2 flex justify-between'>
				<strong>Category:</strong>
				<p>{cat.Category}</p>
			</span>
			<span
				className='hover:text-red-700 cursor-pointer'
				onClick={toggleModal}>
				Close
			</span>
		</div>
	);
}
