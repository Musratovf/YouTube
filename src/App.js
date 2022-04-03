import React, { Children } from 'react';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import './_app.scss';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/sidebar';
import Homescreen from './Screens/homeScreen/homeScreen';
import { Routes, Route } from 'react-router-dom';
import Chanel from "./Components/Chanel/chanel"

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
			<Route
				path=''
				element={
					<Layout>
						<Homescreen />
					</Layout>
				}></Route>

				<Route path='/home' element={ 
					<Layout>
					<Chanel/>
				</Layout>
				 }>
				</Route>
				
			<Route
				path='/search'
				element={
					<Layout>
						<h2>Search Results</h2>
					</Layout>
				}></Route>
		</Routes>
	);
}

export default App;
