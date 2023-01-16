/* eslint-disable no-unused-vars */

import *  as Styled from './styles'
import React, { useState } from 'react';
import { linksMenu } from '../../common/data/menu'
import rubrica from '../../assets/rubrica.png'

import { AiFillCloseCircle } from 'react-icons/ai'
import { Image } from '../../components/Image/index';
import { Buttom } from '../../components/Buttom/button';
import { MenuLinks } from '../../components/navBar/menu';
import uenis from '../../assets/uenis.svg'
import { Links } from '../../components/navBar/links/NavLinks';
export const Menu = () => {

	const [stateMenu, setStateMenu] = useState(false)
	const HandleClickMenu = () => setStateMenu(!stateMenu)
	return (

		<>


			<Styled.MenuContainer    stateMenu={stateMenu} >
	
	<Links  href='/main'>  	< Image src={rubrica} alt='rubrica' />
</Links>
				<Buttom className={'menuButton'} click={() => HandleClickMenu()} >



					{stateMenu ? <AiFillCloseCircle /> : <Image src={uenis}  alt='icone menu' />
					}				</Buttom>


				<MenuLinks information={linksMenu} />

			</Styled.MenuContainer>
		</>
	)
};
