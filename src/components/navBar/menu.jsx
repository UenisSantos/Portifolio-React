import P from 'prop-types'
import { Links } from './links/NavLinks';



export const MenuLinks = ({ information = [],
}) => {


	return (

		<ul>
			{
				information.map((infor, i) => (

					<li key={i}>
						<Links   {...infor} />
					</li>


				))}





		</ul>
	)
};


MenuLinks.propTypes = {

	information: P.arrayOf(
		P.shape({

			children: P.node,
			href: P.string.isRequired,

		})
	)

}
