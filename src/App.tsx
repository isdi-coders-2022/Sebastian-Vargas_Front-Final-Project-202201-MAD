import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/core/header/Header';
import Home from './pages/home';
import Details from './pages/details';
import Footer from './components/core/footer/Footer';


function App(): JSX.Element {
    return (

        <>
        <Header/>
        <Home/>
        <Footer/>
        </>
 
    );
}

export default App;

/*         <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Details/>}/>
            </Routes>
        </BrowserRouter> */