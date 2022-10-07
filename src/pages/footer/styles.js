import styled, { css } from 'styled-components';

export const FooterContainer = styled.section`
${({ theme }) => css`
height:${theme.sizes.small} ;
background-color:${theme.colors.secundaryColor} ;
width:100% ;
position: fixed ;
bottom:0 ;
z-index:99 ;
`}
`;

export const Footer = styled.ul`
${({ theme }) => css`
height: 100% ;
display:flex ;
flex-direction:row ;
justify-content:space-evenly ;

svg{
width:100% ;
padding:${theme.spacings.small} ;
height:${theme.sizes.small} ;
}

`}



`
