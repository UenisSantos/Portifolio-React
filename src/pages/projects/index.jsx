/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'
import *  as Styled from './styles'
import { Image } from '../../components/Image/index';
import projects from '../../assets/projects.svg'
import { Text } from '../../components/Text/index';
import { Modal } from '../../components/modal/index';
import { projecMock } from '../../common/data/projects';
import { Buttom } from '../../components/Buttom/button';
import { Links } from '../../components/navBar/links/NavLinks';
import { Pagination } from '../pagination';


export const Projects = () => {

const [itensPerPage, setItensPerPage]=useState(6)

const [currentPage,setCurrentPage] = useState(0)

const pages= Math.ceil(projecMock.length / itensPerPage)

const startIndex= currentPage*itensPerPage;
const endIndex = startIndex + itensPerPage


const currentItens = projecMock.slice(startIndex,endIndex)


	return (
		<Styled.ProjectsContainer>

			<Image src={projects} alt={'projetos'} />
			<Text as='h1' size='small'> Projetos  </Text>
			<Text size='smaller' >  Principais projetos construidos</Text>




			<Styled.Container>
				{currentItens.map((iten, i) => (

						<Styled.ModalContainer key={i} >
							<Text   as='h2' size='small'> {iten.title}</Text>
							<Text>{iten.subTitle}</Text>

							<Modal size='medium'>

								<Image src={iten.src} alt={projects} />
							</Modal>
							<Buttom pattern='pattern'   ><a href={iten.click}>ver projeto</a></Buttom>
						</Styled.ModalContainer>


				))}


			</Styled.Container>




<Pagination  setCurrentPage={setCurrentPage}  pages={pages} />



		</Styled.ProjectsContainer>


	)
};
