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
	filter: brightness(90%) contrast(150%) grayscale(30%) saturate(200%) ;
}








${theme.breakpoints.xl} {

	img{
		width: 40 % ;
	}
}

${theme.breakpoints.max} {

	img{
		width: 30 % ;
	}
}




${theme.breakpoints.lg} {

h1{

		font - size:${theme.sizes.medium}

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

button{
		position:relative ;
		left:45% ;
		bottom:-3rem ;


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


