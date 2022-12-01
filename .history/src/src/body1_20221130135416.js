import React from 'react'

function Body1() {
    return (
        <div>
            <div className='container-body1'>
                <div className='center-body1'>
                    <h1 style={{ color: '#333' }}>Top-Rated Experiences</h1>
                    <h5 style={{ color: ' #012660' }}>Highly reviewed by locals and travelers worldwide</h5>
                    <div className='center-grid'>
                        <div className='grid-card'>
                            <div className='card'>
                                <img src='https://www.helpguide.org/wp-content/uploads/woman-mixing-ingredients-and-vegetables-in-pan-while-preparing-lunch-768.jpg' alt="picture" width="290" />
                                <h4 style={{color:'',fontWeight:'400',fontSize:'20'}}>1,500+ EXPERIENCES</h4>
                                <h5>Learn to cook around the world</h5>
                                <h4 style={{fontWeight:'500'}}>
                                 Let inspiring chefs and foodies teach you how to cook traditional cuisine in a hands-on setting.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body1