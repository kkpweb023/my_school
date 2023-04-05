import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Services/NavBar';
import Footer from './Services/Footer';

function App() {
  return (
    <div style={{ position: "relative" }}>
    <NavBar />
    <Routes basename="/school_notes">
        
        <Route>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/notes/:info' element={<h1>Class 9 page</h1>} />         
        </Route>

    </Routes>
    <Footer />

</div>
  );
}

export default App;
