import { NavLink } from "react-router-dom";
// import logo from '../assets/img/mr-toy-logo.png'
import pinterestIcon from '../../public/images/icon-pinterest.svg'
import facebookIcon from '../../public/images/icon-facebook.svg'
import twitterIcon from '../../public/images/icon-twitter.svg'


export function AppFooter() {

    return (
        <footer className="app-footer full">
            <div>
                <h1>myteam</h1>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                </nav>
            </div>
            <p>
                987  Hillcrest Lane <br></br>
                Irvine, CA<br></br>
                California 92714<br></br>
                Call Us : 949-833-7432<br></br>
            </p>
            <div>
                <div className="social">
                    <img src={facebookIcon} style={{ width: '20px' }} />
                    <img src={pinterestIcon} style={{ width: '20px' }} />
                    <img src={twitterIcon} style={{ width: '20px' }} />
                </div>
                <p>Copyright 2020. All Rights Reserved</p>
            </div>
        </footer>
    )
}
