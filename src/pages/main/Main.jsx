import React from 'react'
import { About } from '../about';
import { Contact } from '../contact';
import { Education } from '../education';
import { Projects } from '../projects';
import *  as Styled from './styles'


export const Main = () => {
return (

<Styled.Main>
<About/>
<Education/>
<Projects/>
<Contact/>

</Styled.Main>
)
};