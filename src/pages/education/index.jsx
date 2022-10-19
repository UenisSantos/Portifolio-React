
import React, { useState } from 'react'
import *  as Styled from './styles'
import education from '../../assets/education.svg'
import { Image } from '../../components/Image/index';
import { Text } from '../../components/Text/index';
import { certificates } from '../../common/data/certificates'
import { Modal } from '../../components/modal/index';
import { Links } from '../../components/navBar/links/NavLinks';
import { BsChevronDoubleDown } from 'react-icons/bs'
import { RiCloseLine } from 'react-icons/ri'
import { Buttom } from '../../components/Buttom/button';

export const Education = () => {

	/* 	const [stateModal, setStateModal] = useState('none')*/


	const [visibleModal, setVisibleModal] = useState(false)
	const [stateClass, setStateClass] = useState('')

	const openBigModal = (value) => {
		setVisibleModal(!visibleModal)
		setStateClass(value)

	}

	return (
		<>
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


				{certificates.map((iten, i) => (
					<Modal key={i} size={'medium'}  >

						<Text as='h3' size='smaller'>
							{iten.title}
						</Text>

						<Text size='smaller' >
							{iten.subTitle}

						</Text>

						<Buttom className='context' click={() => openBigModal(iten.src)} >{iten.document}

						</Buttom>

					</Modal>


				))}



				<Links href={'te'}>
					<Text size='smaller'>
						ver mais certificados <BsChevronDoubleDown />
					</Text>
				</Links>

			</Styled.Certificates>




			<Styled.ModalBig visibleModal={visibleModal}  >


				<Modal size={'big'}>
					<Buttom click={openBigModal}  >
						<RiCloseLine />
					</Buttom>


					<Image src={stateClass} alt={stateClass} />

				</Modal>

			</Styled.ModalBig>
		</>
	)
};
