import './Navbar.css'

const Navbar = () => {

    return (
        <nav>
            <a href="#" className="logo">Stock<span className="red">Spark</span>
            </a>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="/Product">List of Products</a>
                </li>
                <li>
                    <a href="#">Sales</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar