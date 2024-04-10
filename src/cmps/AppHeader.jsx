import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import logo from '/images/logo.svg'
import hamburger from '/images/icon-hamburger.svg'
import closeIcon from '/images/icon-close.svg'
import deco from '/images/bg-pattern-about-1-mobile-nav-1.svg'


export function AppHeader() {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileNavOpen, seIsMobileNavOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    function handleScroll() {
        setIsScrolled(window.scrollY > 0)
    }

    function toggleMobileNav() {
        seIsMobileNavOpen(currOpenStatus => !currOpenStatus)
    }

    const headerScrolledClass = isScrolled ? 'scrolled' : ''
    const mobileNavOpenClass = isMobileNavOpen ? 'open' : ''

    return (
        <>
            <header className={"main-layout full app-header " + headerScrolledClass}>

                <div className={"backdrop " + mobileNavOpenClass} onClick={toggleMobileNav}></div>
                <div className="section-container flex align-center">
                    <img src={logo} alt="myteam logo" className="logo"></img>
                    <img src={hamburger} alt="hamburger" className="hamburger" onClick={toggleMobileNav}></img>
                    <nav className={"flex app-nav " + mobileNavOpenClass}>
                        <img src={closeIcon} alt="close" className="close" onClick={toggleMobileNav}></img>
                        <NavLink to="/" onClick={toggleMobileNav}>Home</NavLink>
                        <NavLink to="/about" onClick={toggleMobileNav}>About</NavLink>
                        <NavLink to="/contact" className="btn" onClick={toggleMobileNav}>contact us</NavLink>
                        <img src={deco} className="deco"></img>
                    </nav>
                </div>

            </header>
        </>
    )
}
