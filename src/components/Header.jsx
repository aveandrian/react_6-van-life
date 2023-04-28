import { NavLink, Link } from "react-router-dom"
export default function Header(){
    const activeStyles = {
        textDecoration: "underline",
        fontWeight: 700,
    }
    return (
      <header  className='header'>
        <Link to="/" className='header--title'>#VANLIFE</Link>
        <nav className='header--links'>
            <NavLink to="/host" className='header--host' style={({isActive}) => isActive? activeStyles : null}>Host</NavLink>
            <NavLink to="/about" className='header--about' style={({isActive}) => isActive? activeStyles : null}>About</NavLink>
            <NavLink to="/vans" className='header--vans' style={({isActive}) => isActive? activeStyles : null}>Vans</NavLink>
        </nav>
      </header>
    )
  }
  