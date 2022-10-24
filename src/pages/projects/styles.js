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




 svg{
	position:relative ;
    	color:${theme.colors.ligth};
    height:${theme.sizes.smaller} ; ;
    width:${theme.sizes.smaller} ;
    animation-name:mymove ;
    animation-duration:0.5s ;
animation-iteration-count:infinite ;

    }

    @keyframes mymove {
  from {top: 0px;}
  to {bottom: 10px;
color:${theme.colors.primaryColor} ;
}
}

a{
	width:100% ;

}


a  p{
background-color:${theme.colors.secundaryColor} ;
	color:${theme.colors.primaryColor};
	margin:${theme.sizes.big} auto;

padding:${theme.sizes.smaller};
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
