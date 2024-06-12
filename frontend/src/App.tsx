import './App.css'
import { initGA } from './analytics';
import { Home, Products } from './components/index'

import { clarity } from 'react-microsoft-clarity'
import { Route, Routes } from 'react-router-dom';

const CLARITY_ID = import.meta.env.VITE_CLARITY_ID || "";

const NODE_ENV = import.meta.env.VITE_NODE_ENV || "";
if (NODE_ENV === 'production' || NODE_ENV === 'dev') clarity.init(CLARITY_ID);

initGA();

function App() {
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
