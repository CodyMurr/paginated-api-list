import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utilities/api';
import ApiContext from '../context/ApiContext';
import Modal from 'react-modal';
import CategoryDetail from './CategoryDetail';

Modal.setAppElement('#root');

export default function Category() {
	const { categData, getApisByCat } = useContext(ApiContext);
	const { category } = useParams();
	const [isOpen, setIsOpen] = useState(false);
	const [detail, setDetail] = useState({});

	function toggleModal() {
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		fetchData(
			`entries?category=${category.split(' ')[0].toLowerCase()}`,
			getApisByCat,
		);
	}, [getApisByCat, category]);
	return (
		<div>
			<h3>{category}</h3>

			{categData.map((cat) => (
				<section key={cat.API}>
					<strong
						onClick={() => {
							setDetail({ ...cat });
							toggleModal();
						}}>
						{cat.API}
					</strong>
					<Modal isOpen={isOpen} onRequestClose={toggleModal}>
						<CategoryDetail cat={detail} toggleModal={toggleModal} />
					</Modal>
				</section>
			))}
		</div>
	);
}
