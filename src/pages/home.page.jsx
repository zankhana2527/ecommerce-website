import React, { useState, useEffect } from 'react'
import homepageBanner from '../assets/homepage-image.jpg'
import ProductCard from '../components/product-card'
import Newsletter from '../components/news-letter'
import MoreAboutUs from '../components/more-about-us'
import Footer from '../components/footer'
import PaymentFooter from '../components/payment-footer'


const HomePage = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('homepageData.json', {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
        })
        .then((response) => response.json())
          .then((data) => {
            setProducts(data)
          });
    }, [])

    return (
        <>
                <main>
                    <img src={homepageBanner} alt=""/>
                </main>
                <div className="product-grid">
                    {products.map(product => <ProductCard product={product}/>)}
                </div>
            <Newsletter />
            <div className='wrapper'>
                <MoreAboutUs />
                <Footer />
            </div>
            <PaymentFooter />
        </>
    )
}

export default HomePage
