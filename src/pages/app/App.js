import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/index';
import { About } from '../about/index';

function App() {
	return (




		<Routes  >
			<Route path='/' element={<Layout />} >
				<Route path='/sobre' element={<About />} />



			</Route>

		</Routes>








	);
}

export default App;
