import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from './pages/Business'
import Entertainment from './pages/Entertainment'
import Health from './pages/Health'
import Science from './pages/Science'
import Sports from './pages/Sports'
import Technology from './pages/Technology'

const apikey = process.env.REACT_APP_NEWS_APIKEY;

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home apikey={apikey} category="top"/>} />
        <Route path='/about' element={<About />} />
        <Route path='/business' element={<Business apikey={apikey} category="business"/>} />
        <Route path='/entertainment' element={<Entertainment apikey={apikey} category="entertainment"/>} />
        <Route path='/health' element={<Health apikey={apikey} category="health"/>} />
        <Route path='/science' element={<Science apikey={apikey} category="science"/>} />
        <Route path='/sports' element={<Sports apikey={apikey} category="sports"/>} />
        <Route path='/technology' element={<Technology apikey={apikey} category="technology"/>} />
      </Routes>
    </>
  );
}

export default App;
