import React from 'react';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import './_app.scss'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/sidebar'
import HomeScreen from './Screens/homeScreen/homeScreen'


function App() {
  
  const [sidebar, toogleSidebar] = useState(false);
  
  const handleToogleSidebar =  () => toogleSidebar(value => !value)
	return (
		<>
    <Header handleToogleSidebar={handleToogleSidebar}/>
    <div className='app__container border border-info'>
      <Sidebar sidebar={sidebar}/>
      <Container fluid className='app__main border border-warning'>
      <HomeScreen />
      </Container>
    </div>
		</>
	);
}

export default App;
