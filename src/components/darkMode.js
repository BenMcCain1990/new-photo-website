//Imports
import React from "react";
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';
import './darkMode.css';

//Define both dark and light mode.
const DarkMode = () => {

    // Target button and toggle between dark theme and light theme.
    const toggleTheme = (e) => {
        const isChecked = e.target.checked;
        document.querySelector('body').setAttribute('data-theme', isChecked ? 'dark' : 'light');
    };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
