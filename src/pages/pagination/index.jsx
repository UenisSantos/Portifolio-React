import React,{useState} from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Pagination = ({setCurrentPage,pages}) => {
const [ classe,setClasse ]=useState(1);
const SelectClasse  =(i)=> setClasse(i+1);

console.log(classe);

return (

<Styled.PaginationContainer classe={classe}  >

{Array.from(Array(pages), (iten,i)=>{

return <button key={i} value={i} onClick={(e)=>{setCurrentPage(Number(e.target.value));SelectClasse(i)} } className={ 'buttonPagination '} >{i}
</button>
})}


</Styled.PaginationContainer>
)
};


Pagination.propTypes = {

	setCurrentPage: P.func.isRequired,
	pages: P.number.isRequired

}
