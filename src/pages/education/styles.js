import styled, { css } from 'styled-components';
import fundo from '../../assets/fundo.svg';
export const EducationContainer = styled.section`
${({ theme }) => css`
margin-top:${theme.sizes.medium} ;
  word-break:keep-all ;

${theme.breakpoints.sm}{
	background-image: url(${fundo}) ;
background-size:100% ;
}

${theme.breakpoints.max}{

	background-size:100% 80%;


}

`}`;



export const Title = styled.article`
${({ theme }) => css`
overflow:none ;

    p,h1{ margin:${theme.spacings.small} ;}


    p{ font-weight:lighter ;
	padding:${theme.spacings.medium}
}

    img{
    position:relative ;
    width:15vw ;
    top:${theme.sizes.smaller} ;
    left:40% ;
    }



    ${theme.breakpoints.sm}{

    p{
	 margin-top:${theme.spacings.big};
	 background-color:white ;

}

    h1{ font-size:${theme.sizes.small}   }

}

${theme.breakpoints.lg}{

h1{
	margin-left:20% ;
}



}



${theme.breakpoints.max}{
	h1{ font-size:${theme.sizes.medium};	;
}
	p {font-size:${theme.sizes.small};
	width: 100% ;
	height:10rem ;
}


${theme.breakpoints.xmax}{
	h1{ font-size:${theme.sizes.huge}

}

}}
`}`;






export const Certificates = styled.article`
 ${({ theme }) => css`
    overflow-y:auto ;
    width:100% ;
    word-break:break-word ;
    text-align:center ;

    .modal{
	margin:${theme.sizes.small} auto;
	padding:${theme.sizes.small} ;

};

    h3,p{ margin:  auto; }

    p{

    color:${theme.colors.secundaryColor};
    padding:${theme.spacings.small};
    font-weight:100 ;
    }




button{
position:relative ;
left:25% ;
bottom:-2rem ;
};




${theme.breakpoints.sm}{
	.modal{ height:40% }



}

${theme.breakpoints.lg}{
		display: grid;
	grid-template-columns:1fr 1fr ;

	.modal{
		height:75% ;
	}
}


${theme.breakpoints.xl}{
display: grid;

	grid-template-columns:1fr 1fr 1fr;



}

${theme.breakpoints.max}{
	margin-bottom:${theme.sizes.medium} ;

	button{
		left:20% ;
		top:4rem ;
	}
.modal{
	height:80% ;
}

}

${theme.breakpoints.xmax}{

	grid-template-columns:1fr 1fr 1fr 1fr;

button{
	left:20% ;
	top:3rem ;
}
.modal{

	height:85% ;

& h3,p{
	font-size:${theme.sizes.small} ;

}

}



}
`}

`











export const ModalBig = styled.section`
${({ theme, visibleModal }) => css`
display:${visibleModal ? 'flex' : 'none'} ;
width:100% ;
height:100vh ;
background-color:rgba(211, 211, 211, 0.9); ;
position:fixed ;
top:0;
justify-content:center ;




.transparentMoldal{
	margin-top: ${theme.sizes.medium} ;
	background-color:${theme.colors.secundaryColor};
width:90% ;
height:70vh ;
z-index:2 ;
align-items:center ;


}

.modal > button{

position:absolute ;
z-index:99 ;
height:${theme.sizes.smaller} ;
right: 10% ;
}

svg{
height:100% ;
width:100%;
opacity:0.5 ;
}
.modal{margin:${theme.sizes.big} auto ;}

.modal > img{
height:100% ;
width:100% ;
}







${theme.breakpoints.max}{

	.transparentMoldal{

height:80% ;
width:70% ;
	}

 .modal{
	width:70% ;
	height:60vh ;


	& button{
right: 20% ;
height:5rem ;
}

 }

}

`}
`;
