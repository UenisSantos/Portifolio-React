import styled, { css } from 'styled-components';

export const ProjectsContainer = styled.div`
${({ theme }) => css`
margin:${theme.sizes.small} ;
display:flex ;
flex-direction:column ;
text-align:center ;
word-break:keep-all ;
align-items:center ;
p{
	margin:${theme.spacings.medium} ${theme.spacings.small} ;
}


img{
	width:50%;
}
${theme.breakpoints.xl}{

	img{
		width:40% ;
	}
}

${theme.breakpoints.max}{

	img{
		width:30% ;
	}
}



.button{

margin:3%auto;
border:2px solid ${theme.colors.ligth} ;
text-align:center ;
font-size:${theme.sizes.smaller} ;
padding:${theme.spacings.small} ;
position:relative ;
z-index:1 ;
box-shadow:3px 3px 8px  ${theme.colors.primaryColor};
width:15rem ;
border-radius:5% ;

::before{
	content:'' ;
	position:absolute ;
top:0 ;
left:0 ;

width:0%;
height:100% ;
z-index:-1 ;
background-color:${theme.colors.primaryColor}  ;

transition: .7s ease ;

}

:hover{
::before{
	font-weight:bold ;
	width:100% ;
}
}
}
${theme.breakpoints.lg}{

h1{

font-size:${theme.sizes.medium}

}

`}
`;



export const Container = styled.div`
${({ theme }) => css`
display:grid;
grid-template-columns: 1fr  ;

.modal{
	margin:auto ;
}

img{

	height:100% ;
	width:100% ;
}

${theme.breakpoints.lg}{

	grid-template-columns: 1fr 1fr ;}


}


${theme.breakpoints.xl}{

grid-template-columns: 1fr 1fr 1fr ;


}

${theme.breakpoints.max}{

grid-template-columns: 1fr 1fr 1fr 1fr ;

.modal{
	height:30rem ;

}
}







`}
`;




export const ModalContainer = styled.div`
${({ theme }) => css`
display:flex;
flex-direction:column ;





h2{
margin-top:30px ;

}

p{
color:${theme.colors.secundaryColor} ;
font-weight: lighter;
font-size:${theme.sizes.smaller}  ;

}







`}
`;
