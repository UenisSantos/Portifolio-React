import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Buttom = ({ children, click, menu = false, className }) => {
	return (

		<Styled.ButtomContainer menu={menu} className={className} onClick={click}  >
			{children}
		</Styled.ButtomContainer>
	)
};


Buttom.propTypes = {

	children: P.node.isRequired,
	click: P.func,
	menu: P.bool,
	className: P.string
}
