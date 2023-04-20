//Imports
import './navbar.css';

function Nav() {
    return (
    <div class='nav'>
        <input type='checkbox' id='nav-check'/>
        <div class='nav-header'>
            <div class='nav-title'>
                Benjamin McCain
            </div>
        </div>
        <div class='nav-btn'>
        <label for='nav-check'>
            <span></span>
            <span></span>
            <span></span>
        </label>
        </div>
        <div class='nav-links'>
            <a href='https://www.instagram.com/benjaminmccain1990/' target='_blank'>Instagram</a>
            <a href='https://benjaminmccain.darkroom.com/' target='_blank'>Prints</a>
        </div>
    </div>
    );
}

export default Nav;