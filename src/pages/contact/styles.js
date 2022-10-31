
import fundo from '../../assets/fundo.svg'
import styled, { css } from 'styled-components';




export const ContactContainer = styled.section`
${({ theme }) => css`
height:100vh ;
width:100vw ;
background-image: url(${fundo}) ;
background-repeat: no-repeat ;
background-size:60% 100% ;
background-attachment: fixed;
background-position:right ;
h1{

margin: ${theme.spacings.big} ${theme.spacings.medium} ${theme.spacings.small} ${theme.spacings.medium};

}


p{
	font-weight:lighter ;
	padding:  ${theme.spacings.small}   ${theme.spacings.medium};
}



${theme.breakpoints.lg}{
	background-size:80% 100% ;

h1{
	font-size:${theme.sizes.medium} ;
}

p{
	font-size:${theme.sizes.small} ;
	padding:${theme.sizes.small} ;
padding-right:${theme.sizes.big} ;
}

}


${theme.breakpoints.xl}{
p{
	padding-right:40% ;

}

}


`}
`;









export const Wrapper = styled.div`
${({ theme }) => css`
width:100vw ;
height:50% ;
display:flex ;
flex-direction:column ;
align-items:center;
img{
height:35% ;
margin:${theme.sizes.small};
}

.modal{

span{
	margin-left:${theme.spacings.medium}
}
}




${theme.breakpoints.lg}{
img{
	height:55% ;
}

}


${theme.breakpoints.xl}{
justify-content:space-around ;
	flex-direction:row-reverse ;
	img{
		height:100% ;

	}
button{

	width:18rem ;

}

	.modal{
		width:50% ;

		span{
			font-size:${theme.sizes.small} ;
		}
	}
}



${theme.breakpoints.xl}{

.modal{
	width:30% ;

}

}

`}
`;





export const FormContainer = styled.form`
${({ theme }) => css`

font-size:${theme.sizes.small}  ;
button{

	position:relative ;
bottom:-7rem ;
left:10rem ;

margin-bottom:${theme.sizes.huge};
}








`}
`;
