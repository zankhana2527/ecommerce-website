import React from 'react'

const Newsletter = () => {
    return (
        <div className='newsletter'>
             <div className='left'>
                 <h2>Sign up to our newsletter</h2>
                 <h3>And get $30 coupon</h3>
             </div>
             <input id="newsletter-email" type='text' placeholder='Enter here your email'/>
             <button type='submit'>SIGN UP</button>
        </div>
    )
}

export default Newsletter
