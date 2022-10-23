import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Buttom = ({ children, click, pattern , className }) => {
	return (

		<Styled.ButtomContainer pattern={pattern} className={className} onClick={click}  >

				{children}



		</Styled.ButtomContainer>
	)
};


Buttom.propTypes = {

	children: P.node.isRequired,
	click: P.func,
	pattern:P.string.isRequired,
	className: P.string
}
