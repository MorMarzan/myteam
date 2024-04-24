import { NavLink } from "react-router-dom";
// import logo from '../assets/img/mr-toy-logo.png'
import pinterestIcon from '/images/icon-pinterest.svg'
import facebookIcon from '/images/icon-facebook.svg'
import twitterIcon from '/images/icon-twitter.svg'


export function AppFooter() {

    return (
        <footer className="main-layout full app-footer">
            <div className="section-container">
                <div className="nav">
                    <h1 className="logo">myteam</h1>
                    <nav className="app-nav">
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/about" >About</NavLink>
                    </nav>
                </div>
                <p className="address opacFont">
                    987  Hillcrest Lane <br></br>
                    Irvine, CA<br></br>
                    California 92714<br></br>
                    Call Us : 949-833-7432<br></br>
                </p>
                <div className="social">
                    <div className="icons-container">
                        <img src={facebookIcon} />
                        <img src={pinterestIcon} />
                        <img src={twitterIcon} />
                    </div>
                    <p className="opacFont">Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
