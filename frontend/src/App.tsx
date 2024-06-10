import './App.css'
import { Home, Products } from './components/index'

import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity'
import { Route, Routes } from 'react-router-dom';

// OUR_TRACKING_ID
const TRACKING_ID = import.meta.env.GA_TRACKING_ID || ""; 
ReactGA.initialize(TRACKING_ID);

const NODE_ENV = import.meta.env.VITE_NODE_ENV || "";
if (NODE_ENV === 'production') clarity.init('midum145ht');


function App() {

  // Track Pageviews
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
