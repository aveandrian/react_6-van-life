import { NavLink, Link } from "react-router-dom"
import UserIcon from '../assets/user-icon.svg?component'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Header(){
  const [isOpened, setIsOpened] = useState(false)
  function toggleIsOpened(){
    setIsOpened(prev => !prev)
  }
    const activeStyles = {
        textDecoration: "underline",
        fontWeight: 700,
    }
    return (
      <header  className='header'>
        <Link to="/" className='header--title' onClick={isOpened ? toggleIsOpened : null}>#VANLIFE</Link>
        <nav className={`header--links ${isOpened ? "opened" : ""}`}>
            <NavLink to="/host" onClick={isOpened ? toggleIsOpened : null} className='header--host' style={({isActive}) => isActive? activeStyles : null}>Host</NavLink>
            <NavLink to="/about" onClick={isOpened ? toggleIsOpened : null} className='header--about' style={({isActive}) => isActive? activeStyles : null}>About</NavLink>
            <NavLink to="/vans" onClick={isOpened ? toggleIsOpened : null} className='header--vans' style={({isActive}) => isActive? activeStyles : null}>Vans</NavLink>
            <NavLink to="/login" onClick={isOpened ? toggleIsOpened : null} className='header--login' style={({isActive}) => isActive? activeStyles : null}><UserIcon/></NavLink>
        </nav>
        <FontAwesomeIcon icon={isOpened ? faXmark :faBars} className="menu-btn" onClick={toggleIsOpened}/>
      </header>
    )
  }
  