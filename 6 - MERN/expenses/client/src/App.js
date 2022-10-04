import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {Home, Login} from './pages'
import {NavBarr} from './components/NavBarr'
class App extends Component {
  render() { 
    return (
      <div>
        <Container>
          
        <NavBarr />
        <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/login" element={<Login />} exact />
      </Routes>
      </Container>
      </div>
      
    );
  }
}
export default App;