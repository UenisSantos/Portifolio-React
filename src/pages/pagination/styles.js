import styled, { css } from 'styled-components';











export const PaginationContainer = styled.div`
${({ theme, classe }) => css`
height: ${theme.sizes.medium};
width: 100%;
margin: ${theme.sizes.small};
position:relative ;



.buttonPagination{
height: ${theme.sizes.small};
width: ${theme.sizes.small};
margin: ${theme.spacings.medium} ${theme.spacings.small};;
	font-size: ${theme.sizes.smaller};
}

button:nth-child(${classe}){
background-color:${theme.colors.primaryColor}

}


`}
`;
