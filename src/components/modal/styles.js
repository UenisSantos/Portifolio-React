import styled, { css } from 'styled-components';



const Sizes = {


	small: () => css`
	height:15rem ;
	width:45%;
	`,
	medium: () => css`
	height:20rem ;
	width:80%;
	`,




	big: () => css`
	height:60% ;
width:95%;
	`,

}



export const ModalContainer = styled.div`
${({ theme, size }) => css`
border:3px solid ${theme.colors.ligth};
box-shadow: 5px  5px  20px  ${theme.colors.secundaryColor}   ;
${Sizes[size]};







/* .modal:hover{
background-color:red ;
	box-shadow:
                1px 1px #53a7ea,
                2px 2px #53a7ea,
                3px 3px #53a7ea;
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
} */



`}
`;
