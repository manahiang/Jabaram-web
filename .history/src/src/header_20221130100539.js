import React from 'react'
import { GoSearch } from "react-icons/go";

function Header() {
    return (
        <div className='container'>
            <div className='header'>
                <div className='logo'>Jabaram</div>
                <div className='menu'>
                    <ul>
                        <input placeholder='Where are you going?' />
                        <b/><button><GoSearch className='icon-search-Go'/></button>
                        <li><a href=''>Become a host</a></li>
                        <li><a href=''>Sign Up</a></li>
                        <li><a href=''>Log in</a></li>
                        <button>Start Discover</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header