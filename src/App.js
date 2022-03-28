import React from 'react';
import { Container } from 'react-bootstrap';
import './_app.scss'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/sidebar'
import HomeScreen from './Screens/homeScreen/homeScreen'

function App() {
	return (
		<>
    <Header/>
    <div className='app__container border border-info'>
      <Sidebar/>
      <Container fluid className='app__main border border-warning'>
        <HomeScreen/>
      </Container>
    </div>
		</>
	);
}

export default App;
