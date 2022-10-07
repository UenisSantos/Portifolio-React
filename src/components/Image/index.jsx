import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Image = ({ src, alt }) => {
	return (

		<Styled.ImageContainer src={src} alt={alt} />


	)
};


Image.propTypes = {

	src: P.string.isRequired,
	alt: P.string.isRequired
}
