import React from 'react';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import './_app.scss';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/sidebar';
import HomeScreen from './Screens/homeScreen/homeScreen';
import Login from './Screens/LoginScreen/Login';

import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';

const Layout = ({children}) => {
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
				<Container fluid className='app__main  border-warning'>
          {children}
				</Container>
			</div>
		</>
	);
};

function App() {
	return (
		<Routes>
      <Route path='/'>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path='/auth'>
        <Login />
      </Route>

      <Route path='/search'>
        <Layout>
          <h1>Search Results</h1>
        </Layout>
      </Route>

		</Routes>
	);
}

export default App;
