import React from 'react'
import LogoSmall from '../assets/logo-small.png'

const Footer = () => {
    return (
        <footer>
           <div className='footer-divider'></div>
            <img src={LogoSmall} alt='logo' className='small-logo'/>

            <div className='info-footer'>
                <div className='connect-with-us'>
                    <b><h4>Connect with us</h4></b>
                    <div className='header-divider'></div>
                    <p>Modelo - ECommerce</p>
                    <p>4 East 80th Street, New York,Ny</p>
                    <p>+88 897 454 321</p>
                    <p>Say@Hello.com</p>
                    <div className="media-handle">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-dribbble"></i></a> 
                        <a href="#"><i class="fab fa-google-plus-square"></i></a>
                    </div>
                </div>
                <div className='our-support'>
                    <h4>Holiday sale</h4>
                    <div className='header-divider'></div>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Secure Payment</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Refunds</a></li>
                        <li><a href="#">Track Orders</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>            
                <div className='new-arrivals'>
                    <h4>New arrivals</h4>
                    <div className='header-divider'></div>
                    <p>Modelo - ECommerce</p>
                    <p>4 East 80th Street, New York,Ny</p>
                    <p>+88 897 454 321</p>
                    <p>Say@Hello.com</p>
                    <div className="media-handle">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-dribbble"></i></a> 
                        <a href="#"><i class="fab fa-google-plus-square"></i></a>
                    </div>
                </div>            
                <div className='our-support'>
                    <h4>Our support</h4>
                    <div className='header-divider'></div>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Secure Payment</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Refunds</a></li>
                        <li><a href="#">Track Orders</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer