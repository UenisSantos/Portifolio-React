import *  as Styled from './styles'
import { footer } from '../../common/data/footer'

export const Footer = () => {
	return (

		<Styled.FooterContainer className='footer' >
			<Styled.Footer  >
				{footer.map((iten, i) => (
					<li key={i} >
						<a href={iten.href} className={iten.classe}   >

							{iten.children}
						</a>
					</li>

				))}
			</Styled.Footer>


		</Styled.FooterContainer>
	)
};
