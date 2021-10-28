
function Header() {
    return (
        <header>
            {/**Top Section - Logo and Sign in Button */}
            <div className="header__top">
                <img className="header__logo" src="https://rb.gy/lcnybu" alt=""/>
                <button className="header__login">Sign In</button>
            </div>

            {/**Bottom Section - Navigation */}
            <div className="header__bottom">
                <p>Bikes</p>
                <p>Services</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
        </header>
    )
}

export default Header
