import "./Header.css"
import { Navbar } from "../../index"

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <p className="product-Tag-line"> Inventory Managment System</p>
          <h1>Manage your Invontory Efficiently</h1>
          <a href="#" className="demo-btn">
            Demo Lesson
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header