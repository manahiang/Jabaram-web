import React from 'react'
import { GoSearch } from "react-icons/go";

function Header() {
    return (
        <div className='container'>
            <div className='header'>
                <div className='logo'><img src='https://jabaram.netlify.app/img/Jabaram-png.png' width={100}/></div>
                <div className='menu'>
                    <ul>
                        <input placeholder='Where are you going?' />
                        <button className='button-search'><GoSearch className='icon-search-Go'/></button>
                        <li><a href=''>Become a host</a></li>
                        <li><a href=''>Sign Up</a></li>
                        <li><a href=''>Log in</a></li>
                        <button className='start-discover'>Start Discover</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header