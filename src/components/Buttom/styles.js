import styled, { css } from 'styled-components';




const StylButton =
{

	pattern: ({ theme }) => css`


width: 150px;
height:50px ;
background:${theme.colors.primaryColor} ;
position:absolute ;
transform:translate(-50%,-50% );
 text-align:center ;
 font-size:${theme.sizes.smaller} ;
padding:${theme.spacings.small} ;
border:3px solid ${theme.colors.ligth} ;
overflow:hidden ;
font-size:${theme.sizes.smaller} ;
padding:${theme.spacings.small} ;
border-radius:5% ;
box-shadow: 5px  5px  20px  ${theme.colors.secundaryColor}   ;



&::before,
&::after{
	z-index:-1 ;
content: '';
position: absolute ;
width:170% ;
height:500% ;
top:-30px ;
left:50% ;

}

&::before{
	border-radius:55% ;
	background:rgba(255,255,255,1) ;
	animation:animate 5s linear infinite ;
}

&::after{

	border-radius:40% ;
	background:rgba(255,255,255,.5) ;
	animation: animate 5s linear infinite ;

}


@keyframes animate{
	0%
	{
		transform: translate(-50%,-75%)rotate(0deg);
	}
	100%
	{
		transform: translate(-50%,-75%)rotate(360deg);
	}
}





`
}













export const ButtomContainer = styled.button`
${({ menu, theme, pattern }) => css`


${StylButton[pattern]}









`}
`;
