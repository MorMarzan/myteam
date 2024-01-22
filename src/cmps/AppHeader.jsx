
import { NavLink, useNavigate } from "react-router-dom"


export function AppHeader() {


    return (
        <header className="main-layout full app-header ">
            <h1>myteam</h1>
            <nav className="app-nav">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/contact" className="btn">contact us</NavLink>
            </nav>

        </header>
    )
}
