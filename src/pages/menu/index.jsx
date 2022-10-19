/* eslint-disable no-unused-vars */

import *  as Styled from './styles'
import React, { useState } from 'react';
import { linksMenu } from '../../common/data/mock'
import rubrica from '../../assets/rubrica.png'

import { AiFillCloseCircle } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import { Image } from '../../components/Image/index';
import { Buttom } from '../../components/Buttom/button';
import { MenuLinks } from '../../components/navBar/menu';

export const Menu = () => {

	const [stateMenu, setStateMenu] = useState(false)
	const HandleClickMenu = () => setStateMenu(!stateMenu)
	return (

		<>


			<Styled.MenuContainer    stateMenu={stateMenu} >
	<Image src={rubrica} alt='rubrica' />
				<Buttom className={'menuButton'} click={() => HandleClickMenu()} >



					{stateMenu ? <AiFillCloseCircle /> : <BiMenuAltRight />
					}				</Buttom>


				<MenuLinks information={linksMenu} />

			</Styled.MenuContainer>
		</>
	)
};
