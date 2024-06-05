import './App.css'
import { Footer, Header, Info, Topics } from './components/index'

import { clarity } from 'react-microsoft-clarity'

const NODE_ENV = import.meta.env.VITE_NODE_ENV || "";
if (NODE_ENV === 'production') clarity.init('midum145ht');


function App() {
  return (
    <div>
      <Header />
      <Topics />
      <Info />
      <Footer />
    </div>
  )
}

export default App
