import React, { useState } from 'react'
import Jogger from '../assets/pants/jogger.jpg'
import { connect } from 'react-redux'
import { updateWishlist } from '../store/actions/mainAction';
import { updateCart } from '../store/actions/mainAction'

const ProductCard = (props) => {

    const { product } = props
    
    const [onHover, setOnHover] = useState(false)

    const onMouseEnter = () => {
        setOnHover(true)
    }

    const onMouseLeave = () => {
        setOnHover(false)
    }

    return (
        <>
        <div className="card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} > 
            <img src={Jogger} alt={product.id}/>
            <div className="divider"/>
            <div className="container">
                <p>{product.brand}</p>
                <p>{product.product}</p>
                <p>{product.price}</p>
            </div>
            <div> { onHover ? 
                    <div>
                        <button className='cart-btn' onClick={() => {props.updateCart()}}>Add to cart</button> 
                        <a className='wishlist-btn' onClick={() => {props.updateWishlist()}} >
                            <i className='far fa-heart'></i>Add to wishlist
                        </a>
                    </div> : '' }
            </div>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch) => ({
    updateWishlist: () => dispatch(updateWishlist()),
    updateCart: () => dispatch(updateCart())
})   

export default connect(() => {},mapDispatchToProps)(ProductCard)
