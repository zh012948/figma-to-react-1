import '../styles/Navbar.css'
import logo from '../assets/images/logo.png'
function Navbar() {
    return (
        <>
            <nav>
                <div className="logo"><img src={logo} alt="logo" /></div>
                <div className="navbar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a className='btnRegister' href="#">Register Now ➡</a></li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar