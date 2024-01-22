import { NavLink, useNavigate } from "react-router-dom"
import logo from '../../public/images/logo.svg'


export function AppHeader() {


    return (
        <header className="main-layout full app-header ">

            <div className="section-container flex align-center">
                <img src={logo} alt="myteam logo"></img>
                {/* <h1>myteam</h1> */}
                <nav className="flex align-center app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/contact" className="btn">contact us</NavLink>
                </nav>
            </div>

        </header>
    )
}
