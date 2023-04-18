import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {


    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/poisons">Poisons</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/zodiac">Zodiac</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/counter">Counter</Link>
            </li>
        
        </ul>
    )
}