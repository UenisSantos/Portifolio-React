import styled, { css } from 'styled-components';

export const TextAreaContainer = styled.textarea`
${({ theme }) => css`


border: 1px solid ${theme.colors.ligth}  ;
margin: auto ;
display:block ;
border-radius:5% ;
box-shadow: 10px 10px 5px ${theme.colors.secundaryColor}  ;
height:${theme.sizes.big}  ;
width:90%;
`}
`;
