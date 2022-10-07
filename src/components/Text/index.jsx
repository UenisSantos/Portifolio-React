import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Text = ({
	children,
	as = 'p',
	size = 'small'

}) => {
	return (

		<Styled.TextContainer as={as} size={size} >
			{children}
		</Styled.TextContainer>
	)
};


Text.propTypes = {

	children: P.node.isRequired,
	as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	size: P.oneOf(['small', 'smaller', 'medium', 'huge', 'big']),
}
