import React from 'react'

function Header() {
  return (
    <div className='container'>
        <div className='header'>Header
        <div className='logo'>Jabaram</div>
        <div className='menu'>
            <ul>
                <li><input placeholder='Where are you going?'/></li>
                <li><a href=''>Become a host</a></li>
                <li><a href=''>Sig</a></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header