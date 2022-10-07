import styled, { css } from 'styled-components';




export const MenuContainer = styled.nav`
${({ theme, stateMenu }) => css`
height:90vh ;
width:100% ;
background-color:${theme.colors.primaryColor} ;
border-radius: 0 0 0 ${theme.sizes.big} ;
	position: fixed ;
left:${stateMenu ? '0' : '100%'} ;
z-index:98 ;
display: flex;
justify-content:center ;


/* imagens de assinatura
 */
img{
	position:absolute ;
	width:${theme.sizes.huge};
	left:${theme.spacings.smaller} ;
}

.menuButton{
svg{
	position: fixed ;
	font-size:${theme.sizes.medium};
	right:${theme.sizes.smaller}  ;
	top: ${theme.spacings.smaller} ;
}

};


ul{
	position: relative;
display:flex ;
flex-direction:column ;
text-align:center ;
justify-content:center ;
}




a, svg{
	font-size:${theme.sizes.smaller};
	color:${theme.colors.secundaryColor};

}
li{
	margin:${theme.spacings.medium};

}


.themeButton > svg{

color:${stateMenu ? 'white' : theme.colors.ligth}


}

${theme.breakpoints.sm}{
	a{
		font-size:${theme.sizes.small};
	}
}


${theme.breakpoints.lg}{
height:${theme.sizes.medium} ;
border-radius: 0 0 0 0 ;
	left:0 ;
	position:sticky ;
justify-content:end ;
	.menuButton{
	display:none ;

}


ul{
	position:relative ;
display:flex ;
	flex-direction:row ;
justify-content: end ;
padding:${theme.sizes.smaller}; ;
right:${theme.spacings.smaller} ;
}

a,svg{
	font-size:${theme.sizes.smaller};

};


}









${theme.breakpoints.max}{
	height:${theme.sizes.big} ;

a, svg{
	font-size:${theme.sizes.small};

};


img{
	position:absolute ;
	width:20% ;
	height:100% ;
	left:${theme.spacings.small} ;
}


}





`}
`;
