import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';

import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/sidebar'
import HomeScreen from './Screens/homeScreen/homeScreen'

function App() {
	return (
		<>
    <Header/>
    <div className='app_container'>
      <Sidebar/>
      <Container fluid className='app__main'>
        <HomeScreen/>
      </Container>
    </div>
		</>
	);
}

export default App;
