import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css'
import NavBar from './components/ui/navBar';
import Product from './components/products/product'
import { clarity } from 'react-microsoft-clarity'

const NODE_ENV = import.meta.env.VITE_NODE_ENV || "";
if (NODE_ENV === 'production') clarity.init('midum145ht');


function App() {
  return (
    <div className='flex items-center flex-row'>
      <NavBar />
      <Product />
    </div>
  )
}

export default App
