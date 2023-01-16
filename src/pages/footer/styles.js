import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
${({ theme }) => css`
height:${theme.sizes.small} ;
width:100% ;

background-color:${theme.colors.secundaryColor} ;
position: fixed ;
bottom:0 ;
`}
`;

export const Footer = styled.ul`
${({ theme }) => css`
height: 100% ;
display:flex ;
flex-direction:row ;
align-items:center ;
justify-content:space-evenly ;




svg{
width:90% ;
height:${theme.sizes.small} ;
margin:${theme.sizes.smaller} ;

}

`}
`
