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
                        <li><a href='https://accounts.google.com/v3/signin/identifier?dsh=S-1560004959%3A1669741554738613&elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAvqPp4wT1soJg0FSthDYEz0aocwWeu1DYY_XJMTnaJvARGfylfHUS--VrgcwDPiHnL_S20NUg'>Log in</a></li>
                        <li><a href=''><button>Start Discover</button></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header