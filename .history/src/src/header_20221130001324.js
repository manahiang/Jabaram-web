import React from 'react'

function Header() {
    return (
        <div className='container'>
            <div className='header'>
                <div className='logo'>Jabaram</div>
                <div className='menu'>
                    <ul>
                        <li><input placeholder='Where are you going?' /></li>
                        <li><a href=''>Become a host</a></li>
                        <li><a href=''>Sign Up</a></li>
                        <li><a href=''>Log in</a></li>
                        <li><button>Start Discover</button></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header