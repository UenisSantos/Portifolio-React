import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/index';
import { About } from '../about/index';
import { Education } from '../education/index';
import { Projects } from '../projects/index';
import { Contact } from '../contact';

function App() {
	return (




		<Routes  >
			<Routeelement={<Layout />} >
				<Route path='/' element={<About />} />
				<Route path='/educacao' element={<Education />} />
				<Route path='/projetos' element={<Projects />} />
				<Route path='/contato' element={<Contact />} />

			</Route>

		</Routes>








	);
}

export default App;
