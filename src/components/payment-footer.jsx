import React from 'react'
import paypal from '../assets/payemnt-options/payments-paypal.png'
import visa from '../assets/payemnt-options/payments-visa.png'
import masterCard from '../assets/payemnt-options/payments-mastercard.png'
import discover from '../assets/payemnt-options/payments-discover.png'
import skrill from '../assets/payemnt-options/payments-skrill.png'


const PaymentFooter = () => {
    return (
        <div className="payment">
            <img src={paypal} alt="paypal"/>
            <img src={visa} alt="visa card"/>
            <img src={masterCard} alt="master-card"/>
            <img src={discover} alt="discover"/>
            <img src={skrill} alt="skrill"/>
        </div>
    )
}

export default PaymentFooter