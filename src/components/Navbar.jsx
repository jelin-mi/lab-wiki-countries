import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='top-bar'>
            <Link to='/'>
             <h1>LAB - WikiCountries</h1>
        </Link> 
        </div>
    );
}

export default Navbar;