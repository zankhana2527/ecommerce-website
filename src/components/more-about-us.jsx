import React from 'react'
import aboutUs1 from '../assets/aboutUs1.jpg'
import aboutUs2 from '../assets/aboutUs2.jpg'
import sale1 from '../assets/sale1.png'
import sale2 from '../assets/sale2.png'

const MoreAboutUs = () => {
    return (
        <div className='about-us'>
            <div className='about-images'>
                <img src={aboutUs1} alt="about us"/>
                <img src={aboutUs2} alt="about us"/>
            </div>

            <h2>From out blog</h2>

            <div className="sale-banner">
                <div className="sale-1">
                    <div className="left"><img src={sale1} alt="1"/></div>
                    <div className="right"><a href="#">Big sale coming soon</a>
                        <span>15, jan 2014</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor at enim non consequat...</p>
                        <a className='comments' href="#">2 comments</a>
                    </div>
                </div>

                <div className="sale-2">
                    <div className="left"><img src={sale2} alt="2"/></div>
                    <div className="right">
                        <a href="#">Big sale coming soon</a>
                        <span>15, jan 2014</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor at enim non consequat...</p>
                        <a className='comments' href="#">2 comments</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreAboutUs
