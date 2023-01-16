import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/index';
import { About } from '../about/index';
import { Education } from '../education/index';
import { Projects } from '../projects/index';
import { Contact } from '../contact';
import { Main } from '../main/Main';

function App() {
	return (

<>   

		<Routes  >
			<Route element={<Layout />} >
				<Route path='/' element={<Main />} />
				<Route path='/main' element={<Main />} />

		<Route path='/sobre' element={<About />} />

				<Route path='/educacao' element={<Education />} />
				<Route path='/projetos' element={<Projects />} />
				<Route path='/contato' element={<Contact />} />

			</Route>

		</Routes>

</>






	);
}

export default App;
