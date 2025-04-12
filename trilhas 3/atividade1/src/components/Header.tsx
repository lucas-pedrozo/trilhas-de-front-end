import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link className="link" to={'/home'}>Home</Link>
            <Link className="link" to={'/about'} >About</Link>
            <Link className="link" to={'/contact'}>Contact</Link>
        </header>
    );
}

export default Header;