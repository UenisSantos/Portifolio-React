
import React, { useState } from 'react'
import *  as Styled from './styles'
import education from '../../assets/education.svg'
import { Image } from '../../components/Image/index';
import { Text } from '../../components/Text/index';
import { certificates } from '../../common/data/certificates'
import { Modal } from '../../components/modal/index';

import { RiCloseLine } from 'react-icons/ri'
import { Buttom } from '../../components/Buttom/button';
import { Pagination } from '../pagination';

export const Education = () => {

	// eslint-disable-next-line no-unused-vars
	const [itensPerPage, setItensPerPage]=useState(6)

	const [currentPage,setCurrentPage] = useState(0)

	const pages= Math.ceil(certificates.length / itensPerPage)

	const startIndex= currentPage*itensPerPage;
	const endIndex = startIndex + itensPerPage
	const currentItens = certificates.slice(startIndex,endIndex)


	const [visibleModal, setVisibleModal] = useState(false)
	const [stateClass, setStateClass] = useState('')

	const openBigModal = (value) => {
		setVisibleModal(!visibleModal)
		setStateClass(value)

	}

	return (
		<div>
			<Styled.EducationContainer>

				<Styled.Title>
					<Text as='h1' size='small' >
						Certificados
					</Text>
					<Image src={education} />
					<Text size='smaller' >Lista de diplomas e certificados obtidos ao longo da minha vida profissional </Text>

				</Styled.Title>


			</Styled.EducationContainer>

			<Styled.Certificates>


				{currentItens.map((iten, i) => (
					<Modal key={i} size={'small'}  >

						<Text as='h3' size='smaller'>
							{iten.title}
						</Text>

						<Text size='smaller' >
							{iten.subTitle}

						</Text>

						<Buttom pattern='pattern' click={() => openBigModal(iten.src)} >{iten.document}

						</Buttom>

					</Modal>


				))}





			</Styled.Certificates>



			<Styled.ModalBig visibleModal={visibleModal}  >
<div className='transparentMoldal'>

			<Modal size={'big'}>
					<Buttom click={openBigModal}  >
						<RiCloseLine />
					</Buttom>


					<Image src={stateClass} alt={stateClass} />

				</Modal>

			</div>


			</Styled.ModalBig>




			<Pagination pages={pages} setCurrentPage={setCurrentPage} />


		</div>
	)
};
