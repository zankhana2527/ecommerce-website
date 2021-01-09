import React from 'react'
import logo from '../assets/logo.png';
import {connect} from 'react-redux';

const Header = (props) => {

    const languages = ['ENG', 'DE', 'PL']
    const currency = ['US', 'EUR', 'PLN']

    return (
        <header>
            <div className='topbar'>
                <div className='language'>
                    <ul className='lang-option'>
                        { languages.map((language, index) => (
                            <li key={index}>{ language }</li>
                        ))}
                    </ul>
                </div>
                <div className='currency'>
                    <ul className='currency-option'>
                        { currency.map((cur, index) => (
                            <li key={index}>{ cur }</li>
                        ))}
                    </ul>
                </div>
            </div>

            <img src={logo} alt="LOGO"/>

            <div className='mainbar'>
                <div className="left">
                    <div>
                        <i className="far fa-user"></i>
                        <span>Welcome, You can <strong> Login </strong> or <strong>Register</strong></span>
                    </div>

                    <div>
                        <i className="fas fa-phone-alt"></i>
                        <span>Hotline: <b>+88 987 654 321</b></span>
                    </div>
                </div>

                <div className="right">
                    <div>
                        <i className="far fa-heart"></i>
                        <span>Wishlist: <b> {props.wishlistCount} </b></span>

                        <i className="fas fa-shopping-bag"></i>
                        <span>Shopping cart: <b className='price'> ${ props.totalItemsInCart * 279} </b></span>
                    </div>

                    <div className='search'>
                        <input type="text" placeholder='SEARCH'/>
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}


const mapStateToProps = (state) => {
    return {
        wishlistCount: state.main.wishlistCount,
        totalItemsInCart: state.main.totalItemsInCart
    }
}

export default connect(mapStateToProps,{})(Header)
