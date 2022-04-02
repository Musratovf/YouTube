import React, { Children } from 'react';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import './_app.scss';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/sidebar';
import Homescreen from './Screens/homeScreen/homeScreen';
// import Login from './Screens/LoginScreen/Login';
import { Routes, Route, NavLink} from 'react-router-dom';

const Layout = ({ children }) => {
	const [sidebar, toogleSidebar] = useState(false);

	const handleToogleSidebar = () => toogleSidebar((value) => !value);

	return (
		<>
			<Header handleToogleSidebar={handleToogleSidebar} />
			<div className='app__container border-info'>
				<Sidebar
					sidebar={sidebar}
					handleToogleSidebar={handleToogleSidebar}
				/>
				<Container fluid className='app__main p-0  border-warning'>
					{children}
				</Container>
			</div>
		</>
	);
};

function App() {
	return (
		<Routes>
			<Route path='' element={
        <Layout>
          <Homescreen/>
      </Layout>}>
			</Route>

      
      <Route path='/search' element={
        <Layout>
          <h2>Search Results</h2>
      </Layout>}>
			</Route>

      <Route path='*' element={<h2>"Vapshi malades bizda bunaqa ma'lumot yoq"</h2>}>
      </Route >

		</Routes>
	);
}

export default App;
