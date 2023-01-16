import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`

*{
	margin:0 ;
	padding:0 ;
	box-sizing:border-box ;
	font-size:62.5% ;

}


li{
	list-style-type:none;

}
a{
	text-decoration: none;

}


.javascript {
color:#D1AF2E;

}

.jest{
	color:maroon
}

.html{

color:#D84924

}




.bootstrap{

color:#6935b1

}






.storybook{
	color:#F2437E
}

.css{
	color:#0774B1
}




.styled svg {

	background-color:#d37286;
	color:#F1C647

}


.git svg {

	color: white;
	background-color: black;


}

.linkedin svg{

	color:#0A66C2;
	border:2px solid #0A66C2
}

.email svg {
color:#B73728;
border:2px solid #B73728


}

.whatsapp svg{
	color:#48C155;
	border:2px solid #48C155

}


h1{

	color:${theme.colors.primaryColor};
}





`}
`
