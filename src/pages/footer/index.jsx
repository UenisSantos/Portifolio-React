import *  as Styled from './styles'
import { footer } from '../../common/data/footer'
import { Links } from '../../components/navBar/links/NavLinks';

export const Footer = () => {
	return (

		<Styled.FooterContainer className='footer' >
			<Styled.Footer  >
				{footer.map((iten, i) => (
					<li key={i} >
						<Links href={iten.href} classe={iten.classe} newTab={iten.newTab}  >

							{iten.children}
						</Links>
					</li>

				))}
			</Styled.Footer>


		</Styled.FooterContainer>
	)
};
