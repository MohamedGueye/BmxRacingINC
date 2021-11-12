import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header>
            {/**Top Section - Logo and Sign in Button */}
            <div className="header__top">
                <Link to="/">
                <img className="header__logo" src="https://cdn.shopify.com/s/files/1/0017/3791/6514/files/Navbar-Logo_600x.png?v=1547046068" alt=""/>
                </Link>
                <div className="header__login">
                <Link to="/login">
                <p className="header__text">Sign In</p>
                </Link>
                </div>
            </div>

            {/**Bottom Section - Navigation */}
            <div className="header__bottom">
                <p className="header__options">Bikes</p>
                <p className="header__options">Services</p>
                <p className="header__options">About Us</p>
                <p className="header__options">Contact Us</p>
            </div>
        </header>
    )
}

export default Header;
