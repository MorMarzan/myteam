import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import logo from '/images/logo.svg'
import hamburger from '/images/icon-hamburger.svg'


export function AppHeader() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    function handleScroll() {
        setIsScrolled(window.scrollY > 0)
    }

    const dynClass = isScrolled ? 'scrolled' : ''

    return (
        <header className={`main-layout full app-header ${dynClass}`}>

            <div className="section-container flex align-center">
                <img src={logo} alt="myteam logo" className="logo"></img>
                {/* <img src={hamburger} alt="hamburger" className="hamburger"></img> */}
                <nav className="flex align-center app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/contact" className="btn">contact us</NavLink>
                </nav>
            </div>

        </header>
    )
}
