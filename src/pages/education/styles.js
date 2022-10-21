import styled, { css } from 'styled-components';

export const EducationContainer = styled.section`
${({ theme }) => css`
margin-top:${theme.sizes.medium} ;
  word-break:keep-all ;

`}`;



export const Title = styled.article`
${({ theme }) => css`
overflow:none ;
    text-align: center;

    p,h1{ margin:${theme.spacings.small} ;}

    p{ font-weight:lighter ;
	padding:${theme.spacings.medium}
}

    img{
    position:relative ;
    width:15vw ;
    top:${theme.sizes.smaller} ;
    right:10px
    }


    ${theme.breakpoints.sm}{

    p{
	 margin-top:${theme.spacings.big};

}

    h1{ font-size:${theme.sizes.small}   }

}

`}`;






export const Certificates = styled.article`
 ${({ theme }) => css`
    overflow-y:auto ;
    width:100% ;
    word-break:break-word ;
    text-align:center ;

    .modal{
	margin:${theme.sizes.small} auto;
};

    h3,p{ margin:  auto; }

    p{

    color:${theme.colors.secundaryColor};
    padding:${theme.spacings.small};
    font-weight:100 ;
    }




.context{
	margin:${theme.spacings.small};
border:2px solid ${theme.colors.primaryColor} ;
font-size:${theme.sizes.smaller} ;
padding:${theme.spacings.small} ;
position:relative ;
z-index:1 ;
box-shadow:8px 8px 10px  ${theme.colors.secundaryColor};
border-radius:5% ;

::before{
	content:'' ;
	position:absolute ;
top:0 ;
left:0 ;
width:0%;
height:100% ;
z-index:-1 ;
background-color:${theme.colors.primaryColor}  ;
transition: .7s ease ;
}

:hover{
::before{
	font-weight:bold ;
	width:100% ;
}
}
};




    svg{
	position:relative ;
    	color:${theme.colors.li};
    height:${theme.sizes.smaller} ; ;
    width:${theme.sizes.smaller} ;
    animation-name:mymove ;
    animation-duration:0.5s ;
animation-iteration-count:infinite ;
    }

    @keyframes mymove {
  from {top: 0px;}
  to {bottom: 10px;
color:${theme.colors.primaryColor} ;
}
}

a{
	width:150% ;
	margin-left :18vw;
}


a  p{
background-color:${theme.colors.secundaryColor} ;
	color:${theme.colors.primaryColor};
	margin:${theme.sizes.big} auto;

}


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



`}

`











export const ModalBig = styled.section`
${({ theme, visibleModal }) => css`
position:fixed ;
display:${visibleModal ? 'flex' : 'none'} ;
top:${theme.sizes.smaller};
background-color:${theme.colors.secundaryColor};
width:100% ;
height:100vh ;
z-index:2 ;
align-items:center ;

.modal > button{

position:absolute ;
z-index:99 ;
height:${theme.sizes.smaller} ;
right: 10% ;
}

svg{
height:100% ;
width:100%;
}
.modal{margin:${theme.sizes.big} auto ;}

.modal > img{
height:100% ;
width:100% ;
}
















`}
`;
