import React from 'react'
import *  as Styled from './styles'

export const Video = ({ play='autoplay', muted }) => {
return (

<Styled.VideoContainer autoplay={play} muted={muted}>

  <source src="import te from ../../assets/te.mp4"
  type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
	</Styled.VideoContainer>


)
};


