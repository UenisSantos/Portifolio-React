import *  as Styled from './styles'
import { Outlet } from 'react-router-dom'
import { Menu } from '../menu/index';
import { Footer } from '../footer/index';



export const Layout = () => {






	return (

			<Styled.LayoutContainer >

				<Menu />

				<Outlet />


				<Footer />
			</Styled.LayoutContainer>


	)
};
