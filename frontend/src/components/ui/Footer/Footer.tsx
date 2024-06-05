import './Footer.css'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "../../../assets/index"

const Footer = () => {
    return (
        <footer className='dark-grey'>
            <div className='wrapper'>
                <div className='content-container'>
                    <div className='socials'>
                        <a href='#' className='logo'>Stock<span className="red">Spark</span></a>
                        <div className="social-icons">
                            <a href="#">
                                <img src={FacebookLogo} alt="Facbook Logo" />
                            </a>
                            <a href="#">
                                <img src={InstagramLogo} alt="Instagram Logo" />
                            </a>
                            <a href="#">
                                <img src={LinkedinLogo} alt="Linkedin Logo" />
                            </a>
                        </div>
                        <div className="copyright">
                            <a href='https://natnael.dev/' className='logo'>This website is designed by<span className="red"> Natnael</span></a>
                        </div>
                    </div>
                    <div className="links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href='#'>Blog</a>
                            </li>
                            <li>
                                <a href='#'>Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3>Contact US</h3>
                        <ul>
                            <li>
                                <a href='#'>natnael92460@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer