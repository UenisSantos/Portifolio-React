import styled, { css } from 'styled-components';


const Sizes = {

	smaller: (theme) => css`font-size:${theme.sizes.smaller}
	`,
	small: (theme) => css`font-size:	${theme.sizes.small}
	`,
	medium: (theme) => css`font-size:	${theme.sizes.medium}
	`,
	big: (theme) => css`	font-size:${theme.sizes.big}
	`,
	huge: (theme) => css`font-size:	${theme.sizes.huge}
	`,




}




export const TextContainer = styled.p`
${({ size, theme }) => css`

${Sizes[size](theme)}
`}
`;
