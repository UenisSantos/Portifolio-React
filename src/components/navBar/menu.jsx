import React, { useState } from 'react'
import P from 'prop-types'
import { Links } from './links/NavLinks';

import { GrSolaris } from 'react-icons/gr'
import { MdDarkMode } from 'react-icons/md'
import { Buttom } from '../Buttom/button';


export const MenuLinks = ({ information = [],
}) => {
	const [theme, setTheme] = useState(false)

	const handleClickTheme = () => setTheme(!theme)

	return (

		<ul>
			{
				information.map((infor, i) => (

					<li key={i}>
						<Links   {...infor} />
					</li>


				))}


			<Buttom className={'themeButton'} menu={true} click={() => handleClickTheme()} >
				{!theme ? <MdDarkMode /> : <GrSolaris />}
			</Buttom>


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
