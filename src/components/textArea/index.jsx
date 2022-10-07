import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const TextArea = ({ name, placeholder }) => {
	return (

		<Styled.TextAreaContainer
			name={name}
			placeholder={placeholder}
		>

		</Styled.TextAreaContainer>
	)
};


TextArea.propTypes = {

	name: P.string.isRequired,
	placeholder: P.string
}
