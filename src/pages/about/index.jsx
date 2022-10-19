import React from 'react'
import *  as Styled from './styles'
import { Text } from '../../components/Text/index';
import { aboutMock } from './mock';
import { Image } from '../../components/Image/index';

import imageAbout from '../../assets/about.svg'
import { Links } from '../../components/navBar/links/NavLinks';
export const About = () => {
	return (

		<Styled.AboutContainer>
			<Styled.TextsContainer>

						<Text
				as='h1'
				size='small'
			>
				Uenis Santos
			</Text>

			<Text
				size='smaller'
			>
				Olá, sou desenvolvedor Front end, adoro criar aplicações web, baseadas em requisitos que atendam as necessidades do problema. Gosto de participar de projeto desde a definição de regras de negócio e levantamento de requisito até o deploy da aplicação.
				Responsável, ávido por adquirir novos conhecimentos para meu fortalecimento pessoal.
			</Text>
			</Styled.TextsContainer>

<Styled.ImagesContainer>
	<Styled.IconsContainer>
				{aboutMock.map((iten, i) => (
					<li key={i}>

						<Links classe={iten.classe} href={iten.href} >{iten.children}</Links>
					</li>


				))}
			</Styled.IconsContainer>

			<Image src={imageAbout} alt='imagem de tecnologia' />

</Styled.ImagesContainer>



		</Styled.AboutContainer>
	)
};
