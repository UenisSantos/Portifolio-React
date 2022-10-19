import styled, { css } from 'styled-components';

export const AboutContainer = styled.section`
${({ theme }) => css`
margin-top:${theme.sizes.big} ;
display:flex ;
flex-direction:column ;
text-align:center ;

${theme.breakpoints.max}{
	flex-direction: row ;
	 width:80% ;

	 margin:${theme.sizes.huge} auto
}

`}
`;



export const TextsContainer = styled.article`
${({ theme }) => css`
justify-content:space-around ;
margin:auto ;
width:90% ;
h1{
	margin:${theme.spacings.big} 0;
	color:${theme.colors.primaryColor}
};


p{
	color:${theme.colors.secundaryColor};
	margin:${theme.spacings.medium} ${theme.spacings.big};

};




${theme.breakpoints.lg}{

	width:70% ;


h1{
font-size	:${theme.sizes.medium} ;
}

p{
	padding: ${theme.spacings.big};
	font-size	:${theme.sizes.small} ;
}

}

${theme.breakpoints.max}{
padding:1% ;
height:50vh ;

}
`}
`;






export const ImagesContainer = styled.article`
${({ theme }) => css`

img{
margin: ${theme.spacings.big} auto ;

width:60%;
}


${theme.breakpoints.lg}{
display:inline-block ;
}



${theme.breakpoints.max}{

border:2px solid ${theme.colors.primaryColor} ;
border-bottom:none ;
padding:1%;
margin-top:${theme.sizes.big} ;
height:50vh ;


li{
margin-top: ${theme.sizes.big} ;

}
}

`}
`;


export const IconsContainer = styled.ul`
${({ theme }) => css`
	display:flex ;
flex-direction:row ;
width:90% ;
justify-content:space-evenly ;

li{

height:${theme.sizes.small} ;
}


svg{
	margin:auto;
height:100% ;
width: 100%;
margin:${theme.spacings.smaller} ;

};



${theme.breakpoints.sm}{

li{
	height:${theme.sizes.medium} ;
	margin:${theme.spacings.medium} ;


}

}


${theme.breakpoints.max}{


li{
	height:${theme.sizes.huge} ;

margin-top: ${theme.spacings.big} ;

}
}



`	}


`
