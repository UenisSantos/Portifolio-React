import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/index';
import { About } from '../about/index';
import { Education } from '../education/index';

function App() {
	return (




		<Routes  >
			<Route path='/' element={<Layout />} >
				<Route path='/sobre' element={<About />} />
				<Route path='/educacao' element={<Education />} />



			</Route>

		</Routes>








	);
}

export default App;
