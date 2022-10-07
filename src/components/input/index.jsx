import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Input = ({ type, name, placeholder, id, value }) => {
	return (

		<Styled.InputContainer
			type={type} name={name}
			placeholder={placeholder}
			Type={type}
			id={id}
			value={value}
		>

		</Styled.InputContainer>
	)
};


Input.propTypes = {

	type: P.string,
	name: P.string,
	placeholder: P.string,
	id: P.string,
	value: P.string

}
