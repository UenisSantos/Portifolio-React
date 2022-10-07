import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Modal = ({ children, size }) => {
	return (

		<Styled.ModalContainer className='modal' size={size}>
			{children}
		</Styled.ModalContainer>
	)
};


Modal.propTypes = {

	children: P.node.isRequired,
	size: P.oneOf(['small', 'medium', 'big'])
}
