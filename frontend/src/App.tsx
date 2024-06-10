import './App.css'
import { Home, Products } from './components/index'

import ReactGA from "react-ga4";
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity'
import { Route, Routes } from 'react-router-dom';

const CLARITY_ID = import.meta.env.VITE_CLARITY_ID || "";
const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || "";
const NODE_ENV = import.meta.env.VITE_NODE_ENV || "";

ReactGA.initialize(TRACKING_ID);
if (NODE_ENV === 'production') clarity.init(CLARITY_ID);


function App() {
  
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
